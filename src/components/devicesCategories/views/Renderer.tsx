import type { ReactElement } from 'react';
import React, { useState } from 'react';
import type { NavigateFunction } from 'react-router';
import { useNavigate } from 'react-router';
import type { IDevice } from '../../../redux/types';
import { HomeIcon } from '../../home/themed';
import { Header, VisibleLik } from '../../customs';
import { DevicesContainer } from '../themed';
import * as animation from '../../../animation';
import { EDeviceCategory } from '../../../enums';

const renderDevices = (devices: IDevice[], navigate: NavigateFunction): ReactElement[] | ReactElement => {
  return devices.length == 0 ? (
    <Header>No devices in this category</Header>
  ) : (
    devices.map((d) => {
      return (
        <HomeIcon key={d.name} onClick={(): void => navigate(`/devices/${d.code}`)}>
          <i className="icon-mobile" />
          <Header $full>{d.name}</Header>
        </HomeIcon>
      );
    })
  );
};

const renderDesc = (category: EDeviceCategory | undefined): ReactElement => {
  switch (category) {
    case EDeviceCategory.Official:
      return (
        <span>
          <p>
            Official devices are supported by members of the Droidian core team.They receive support and adaptation
            packages from the Droidian core team. You can ask for help at the{' '}
            <VisibleLik to="https://t.me/DroidianLinux">Droidian Telegram group</VisibleLik>.
          </p>
        </span>
      );
    case EDeviceCategory.Community:
      return (
        <span>
          <p>
            These devices are supported by members of the Droidian community. Device-specific fixes are provided by the
            maintainers in various forms (flashable zips or runnable scripts). Please follow the guides corresponding to
            your device. You can ask for help at the{' '}
            <VisibleLik to="https://t.me/DroidianLinux">Droidian Telegram group</VisibleLik> or device specific groups
            created by maintainer.
          </p>
        </span>
      );
    case EDeviceCategory.Potential:
    default:
      return (
        <span>
          <p>
            These devices have had past support for Droidian, but may no longer have active maintenance and could be
            running outdated versions with broken packages. Installing on these devices may result in numerous issues
            and roadblocks. If you are interested in maintaining the device or contributing to its progress, please
            reach out to the <VisibleLik to="https://t.me/DroidianLinux">Droidian Telegram group</VisibleLik> or submit
            a merge request.
          </p>
        </span>
      );
  }
};

// eslint-disable-next-line import/prefer-default-export
export const DevicesRenderer: React.FC<{ devices: IDevice[] }> = ({ devices }) => {
  const navigate = useNavigate();
  const [desc] = useState<EDeviceCategory | undefined>(devices[0]?.category);

  return (
    <DevicesContainer variants={animation.opacity} initial="init" animate="visible" exit="exit">
      {renderDesc(desc)}
      {renderDevices(devices, navigate)}
    </DevicesContainer>
  );
};
