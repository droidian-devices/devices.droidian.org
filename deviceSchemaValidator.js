const { existsSync } = require("fs-extra");
const {
  TEMPLETE_DIR_NAME,
  MD_OUTPUT_DIR,
  CONFIG_DIR_NAME,
} = require("./Constants");
const {
  object,
  string,
  number,
  boolean,
  array,
  lazy,
  REQUIRED_ERROR_MESSAGE,
} = require("yup");

const isValidTemplateName = (value) => {
  try {
    return fs.existsSync(TEMPLETE_DIR_NAME + value + ".md");
  } catch (err) {
    console.error(err);
  }
};

//RSF stands for Required String Field
const RSF = string().required();
// const RSFWI = string().requiedWhenSectionIncluded();
//OSF stands for optionalStringField
const OSF = string().nullable();

//RSF stands for Required Boolean Field
const RBF = boolean().required();
const OBF = boolean().nullable();

//RNF stands for Required Number Field
const RNF = number().required();
const ONF = number();

//RSF stands for Required Link Field
const RLF = string().url().required();

//OSF stands for optionalStringField
const OLF = string().url().nullable();
//RLFII stands for Required Link Field when section is included

//WDHS stands for when defined use schema 
function whenDefinedUseSchema(schemaWhenDefined){
  return lazy((value) => {
      switch (typeof value) {
        case "object": 
          return schemaWhenDefined;
        case "undefined":
        case "null":
        default :
          return string().optional();
      }
    });
}

const linkTextFileName = {
link: RLF ,
text: RSF,
filename: OSF,
direct_download_link: OLF ,
is_recovery_flashable: OBF
}

const vendorZipSchema= object(linkTextFileName);
const vendorImageSchema = vendorZipSchema; 
const androidSchema= vendorZipSchema;
const bootSchema = vendorZipSchema;
const dtboSchema= vendorZipSchema;
const vbmetaSchema= vendorZipSchema;

const deviceSchema = object({
  isManufacturerXiaomi: RBF,
  isNightlyBuild: RBF,
  isCommandProvided: RBF,
  isTwrpRecovery: RBF,

  templateName: RSF,
  manufacturer: OSF,
  name: RSF,
  codename: RSF,
  support: RSF,
  device_type: RSF,
  halium_version: RNF,
  fastboot_mode: RSF,
  recovery_mode: RSF,
  ab_slot: RBF,
  api_version: RSF,
  arch: RSF,
  channel: RSF,
  notes_before_you_start: array().of(object({ text: RSF })),
  droidian_release: RSF,
  is_specific_build_of_drodian_required: RBF,
  droidian_required_build: object({
    rootfs_link: OLF,
    devtools_link: OLF,
  }),
  android: whenDefinedUseSchema(androidSchema),
  vendor_zip: whenDefinedUseSchema(vendorZipSchema),
  vendor_image: whenDefinedUseSchema(vendorImageSchema),
  boot: whenDefinedUseSchema(bootSchema),
  dtbo: whenDefinedUseSchema(dtboSchema),
  vbmeta: whenDefinedUseSchema(vbmetaSchema),
  recovery: whenDefinedUseSchema(object({...linkTextFileName,name: OSF,must_flash: OBF})),
  adaptation: whenDefinedUseSchema(object({...linkTextFileName,name: OSF,extractedFolderName: RSF})),
  statuspage: OLF ,
  contact: whenDefinedUseSchema(object({
    text: RSF,
    link: RLF
  })),
  credit: array().of(object({ name: OSF, link: OLF  })).nullable(),
  command: array().of(OSF).nullable(),
  notes: array().of(object({ title: OSF, text: OSF })).nullable(),
  port_status: array().of(object({ category_name: RSF, features: array().of(object({ id: RSF, value: RSF, comments: OSF })) })),
});

async function isDeviceSchemaValid(deviceConfigData, fileName) {
  try {
    await deviceSchema.validate(deviceConfigData);
  } catch (err) {
    console.log(`\nError in file : ${fileName} .\n`+err);
    process.exit(1);
  }
  return true;
}
module.exports = {
  isDeviceSchemaValid,
};
