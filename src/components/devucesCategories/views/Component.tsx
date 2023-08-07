import React from 'react';
import { Container, Green, Header, ImportantText, OverflowContainerBody, VisibleLik } from '../../customs';
import * as animation from '../../../animation';
import { Category } from '../themed';

const DevicesCategories: React.FC = () => {
  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <OverflowContainerBody $direction="row" $justify="space-evenly">
        <Category>
          <Header>Droidian installer</Header>
          <p>
            You can install Droidian on some devices using Droidian Installer. It is based on{' '}
            <VisibleLik to="https://devices.ubuntu-touch.io/installer/">UBports Installer</VisibleLik> which is
            developed by UBports Foundation.
          </p>
          <p>
            Currently, the following devices are supported:
            <ul>
              <ol>
                <Green>Official devices</Green>
              </ol>
              <li>Google Pixel 3a/3a XL (sargo/bonito)</li>
              <li>Xiaomi Redmi 7 (onclite)</li>
              <li>Xiaomi Redmi Note 7 (lavender)</li>
              <li>Xiaomi Redmi9C/9C NFC (angelica/angelican)</li>
              <li>Poco M2 Pro / Xiaomi Redmi Note 9 Pro / Pro Max / 9S (miatoll)</li>
              <li>Volla Phone (yggdrasil)</li>
              <li>Volla Phone 22 (mimameid)</li>
            </ul>
          </p>
          <p>
            <VisibleLik to="https://github.com/droidian-releng/droidian-installer/releases/">
              Droidian Installer
            </VisibleLik>
          </p>
        </Category>
        <Category>
          <Header>Official devices</Header>
          <p>
            Official devices are supported by members of the Droidian core team.They receive support and adaptation
            packages from the Droidian core team. You can ask for help at the{' '}
            <VisibleLik to="https://t.me/DroidianLinux">Droidian Telegram group</VisibleLik>
          </p>
          <p>
            <ul>
              <ol>
                <Green>F(x)tec</Green>
              </ol>
              <li>F(x)tec Pro1</li>
              <li>F(x)tec Pro1-X</li>
              <ol>
                <Green>Sony</Green>
              </ol>
              <li> Sony Xperia 5 (bahamut)</li>
              <ol>
                <Green>Google</Green>
              </ol>
              <li>Google Pixel 3a/3a XL (sargo/bonito)</li>
              <ol>
                <Green>Oneplus</Green>
              </ol>
              <li>Oneplus 3/3T (oneplus3)</li>
              <ol>
                <Green>Poco / Xiaomi</Green>
              </ol>
              <li>Xiaomi Redmi 7 (onclite)</li>
              <li>Xiaomi Redmi Note 7 (lavender)</li>
              <li>Xiaomi Redmi 9C/9C NFC (angelica/angelican)</li>
              <li>Poco M2 Pro / Xiaomi Redmi Note 9 Pro / Pro Max / 9S (miatoll)</li>
              <ol>
                <Green>Volla</Green>
              </ol>
              <li>Volla Phone (yggdrasil)</li>
              <li>Volla Phone 22 (mimameid)</li>
              <ol>
                <Green>Samsung</Green>
              </ol>
              <li>Samsung Galaxy S9 (Qualcomm) (starqlte) details</li>
            </ul>
          </p>
        </Category>
        <Category>
          <Header>Community devices</Header>
          <p>
            These devices are supported by members of the Droidian community. Device-specific fixes are provided by the
            maintainers in various forms (flashable zips or runnable scripts). Please follow the guides corresponding to
            your device. You can ask for help at the{' '}
            <VisibleLik to="https://t.me/DroidianLinux">Droidian Telegram group</VisibleLik> or device specific groups
            created by maintainer.
          </p>
          <p>
            <ul>
              <ol>
                <Green>Motorola</Green>
              </ol>
              <li>Moto G Power (sofia)</li>
              <ol>
                <Green>Poco / Xiaomi</Green>
              </ol>
              <li>Xiaomi Redmi 9A/9AT (dandelion)</li>
              <ol>
                <Green>Samsung</Green>
              </ol>
              <li>Samsung Galaxy S9 (Exynos) (starlte)</li>
              <li>Samsung Galaxy S9 (Exynos) (starlte)</li>
              <li>Samsung Galaxy Note 9 (Exynos) (crownlte)</li>
              <ol>
                <Green>Sony</Green>
              </ol>
              <li>Sony Xperia 1 (griffin)</li>
              <li>Sony Xperia 5 II (pdx206)</li>
            </ul>
          </p>
        </Category>
        <Category>
          <Header>Potential candidate devices</Header>
          <ImportantText>
            Warning Proceed with caution when installing Droidian on these unsupported devices.
          </ImportantText>
          <p>
            These devices have had past support for Droidian, but may no longer have active maintenance and could be
            running outdated versions with broken packages. Installing on these devices may result in numerous issues
            and roadblocks. If you are interested in maintaining the device or contributing to its progress, please
            reach out to the <VisibleLik to="https://t.me/DroidianLinux">Droidian Telegram group</VisibleLik> or submit
            a merge request.
          </p>
          <p>
            <ul>
              <ol>
                <Green>Asus</Green>
              </ol>
              <li>Asus Zenfone Max Pro M2 (X01BD)</li>
              <ol>
                <Green>Oneplus</Green>
              </ol>
              <li>Oneplus 6/6T (enchilada/fajita)</li>
              <ol>
                <Green>Poco / Xiaomi</Green>
              </ol>
              <li>Pocophone F1 (beryllium)</li>
              <li>Xiaomi Mi A2 (jasmine)</li>
              <li>Xiaomi Mi 9T (davinci)</li>
              <li>Xiaomi 6X (wayne)</li>
              <li>Xiaomi Poco X3 (karna)</li>
              <li>Xiaomi Poco X3 NFC (surya)</li>
              <li>Xiaomi MIX 3 (perseus)</li>
              <li>Xiaomi Redmi Note 7 Pro (violet)</li>
            </ul>
          </p>
          <ImportantText>
            If you have managed to run Droidian on a device that is not listed above please raise a pull request to add
            the device <VisibleLik to="https://github.com/droidian-devices/devices.droidian.org">Here</VisibleLik>.
          </ImportantText>
        </Category>
      </OverflowContainerBody>
    </Container>
  );
};

export default DevicesCategories;
