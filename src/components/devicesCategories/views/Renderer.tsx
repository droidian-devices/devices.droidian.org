import type { ReactElement } from 'react';
import React from 'react';
import type { NavigateFunction } from 'react-router';
import { useNavigate } from 'react-router';
import { HomeIcon } from '../../home/themed';
import { Header, VisibleLink } from '../../customs';
import { DevicesContainer } from '../themed';
import * as animation from '../../../animation';
import { EDeviceCategory } from '../../../enums';
import type { IDevice } from '../../../types';

const renderDevices = (devices: IDevice[], navigate: NavigateFunction): ReactElement[] | ReactElement => {
  return devices.length === 0 ? (
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
  switch (category?.toLowerCase()) {
    case EDeviceCategory.Official.toLowerCase():
      return (
        <span>
          <p>
            Official devices are supported by members of the Droidian core team.They receive support and adaptation
            packages from the Droidian core team. You can ask for help at the{' '}
            <VisibleLink to="https://t.me/DroidianLinux">Droidian Telegram group</VisibleLink>.
          </p>
        </span>
      );
    case EDeviceCategory.Community.toLowerCase():
      return (
        <span>
          <p>
            These devices are supported by members of the Droidian community. Device-specific fixes are provided by the
            maintainers in various forms (flashable zips or runnable scripts). Please follow the guides corresponding to
            your device. You can ask for help at the{' '}
            <VisibleLink to="https://t.me/DroidianLinux">Droidian Telegram group</VisibleLink> or device specific groups
            created by maintainer.
          </p>
        </span>
      );
    case EDeviceCategory.Potential.toLowerCase():
    default:
      return (
        <span>
          <p>
            These devices have had past support for Droidian, but may no longer have active maintenance and could be
            running outdated versions with broken packages. Installing on these devices may result in numerous issues
            and roadblocks. If you are interested in maintaining the device or contributing to its progress, please
            reach out to the <VisibleLink to="https://t.me/DroidianLinux">Droidian Telegram group</VisibleLink>
          </p>
        </span>
      );
  }
};

// eslint-disable-next-line import/prefer-default-export
export const DevicesRenderer: React.FC<{ devices: IDevice[]; category: EDeviceCategory | undefined }> = ({
  devices,
  category,
}) => {
  const navigate = useNavigate();

  return (
    <DevicesContainer variants={animation.opacity} initial="init" animate="visible" exit="exit">
      {renderDesc(category)}
      {renderDevices(devices, navigate)}
    </DevicesContainer>
  );
};
