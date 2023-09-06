// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// This flag disable code validation in case that json will be incorrect or something

import type { IDevice } from '../types';
import sargo from './sargo.json';
import pro1 from './pro1.json';
import pro1x from './pro1x.json';
import bahamut from './bahamut.json';
import oneplus3 from './oneplus3.json';
import onclite from './onclite.json';
import lavender from './lavender.json';
import angelica from './angelica.json';
import miatoll from './miatoll.json';
import yggdrasil from './yggdrasil.json';
import mimameid from './mimameid.json';
import starqlte from './starqlte.json';
import sofia from './sofia.json';
import dandelion from './dandelion.json';
import starlte from './starlte.json';
import star2lte from './star2lte.json';
import crownlte from './crownlte.json';
import griffin from './griffin.json';
import X01BD from './X01BD.json';
import enchilada from './enchilada.json';
import beryllium from './beryllium.json';
import jasmine from './jasmine.json';
import davinci from './davinci.json';
import wayne from './wayne.json';
import karna from './karna.json';
import surya from './surya.json';
import perseus from './perseus.json';
import violet from './violet.json';

const getDevices = (): { devices: IDevice[] } => {
  return {
    devices: [
      starqlte,
      miatoll,
      pro1,
      pro1x,
      bahamut,
      onclite,
      lavender,
      sargo,
      oneplus3,
      angelica,
      yggdrasil,
      mimameid,
      griffin,
      sofia,
      dandelion,
      starlte,
      star2lte,
      crownlte,
      X01BD,
      enchilada,
      beryllium,
      jasmine,
      davinci,
      wayne,
      karna,
      surya,
      perseus,
      violet,
    ],
  };
};

export default getDevices;
