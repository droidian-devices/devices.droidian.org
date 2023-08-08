import type { ReactElement } from 'react';
import React from 'react';
import type { NavigateFunction } from 'react-router';
import { useNavigate } from 'react-router';
import type { IDevice } from '../../../redux/types';
import { HomeIcon } from '../../home/themed';
import { Header } from '../../customs';
import { DevicesContainer } from '../themed';
import * as animation from '../../../animation';

const renderDevices = (devices: IDevice[], navigate: NavigateFunction): ReactElement[] => {
  return devices.map((d) => {
    return (
      <HomeIcon key={d.name} onClick={(): void => navigate(`/devices/${d.id}`)}>
        <i className="icon-mobile" />
        <Header $full>{d.name}</Header>
      </HomeIcon>
    );
  });
};

// eslint-disable-next-line import/prefer-default-export
export const DevicesRenderer: React.FC<{ devices: IDevice[] }> = ({ devices }) => {
  const navigate = useNavigate();

  return (
    <DevicesContainer variants={animation.opacity} initial="init" animate="visible" exit="exit">
      {renderDevices(devices, navigate)}
    </DevicesContainer>
  );
};
