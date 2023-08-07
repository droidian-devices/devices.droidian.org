import type { ReactElement } from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFetchingDevices } from '../controller';
import { Button, Container, ContainerBody, Header, OverflowContainerBody } from '../../customs';
import * as animation from '../../../animation';
import { EDevicesState } from '../../../enums';
import Loading from '../../generic/views/Loading';
import * as hooks from '../../../redux';
import type { IDevice } from '../../../redux/types';
import { Brand, DeviceHeader, DevicesContainer } from '../themed';
import { HomeIcon } from '../../home/themed';

const renderDevices = (devices: IDevice[]): ReactElement[] | ReactElement => {
  const render = (): ReactElement[] => {
    return devices.map((d) => {
      return (
        <HomeIcon key={d.name}>
          <i className="icon-mobile" />
          <Header $full>Porting guide</Header>
          <p>{d.name}</p>
        </HomeIcon>
      );
    });
  };

  return devices.length === 0 ? <Header>No devices available</Header> : render();
};

const renderBrands = (
  devices: IDevice[],
  active: string,
  setActiveBrand: React.Dispatch<React.SetStateAction<string>>,
): ReactElement[] | ReactElement => {
  const brands: string[] = [];
  devices.forEach((d) => {
    if (!brands.includes(d.brand)) brands.push(d.brand);
  });

  const render = (): ReactElement[] => {
    return brands.map((b) => {
      return (
        <Brand key={b}>
          <DeviceHeader $active={active === b} onClick={(): void => setActiveBrand(b)}>
            <Header $full>{b}</Header>
            <i className="icon-down-dir" />
          </DeviceHeader>
          <DevicesContainer $active={active === b} $direction="row" $justify="space-evenly">
            {renderDevices(devices.filter((d) => d.brand === b))}
          </DevicesContainer>
        </Brand>
      );
    });
  };

  return devices.length === 0 ? <Header>No devices available</Header> : render();
};

const Devices: React.FC = () => {
  const { devices } = useSelector(hooks.devicesState);
  const dispatch = useDispatch();
  const [status, setStatus] = useState<EDevicesState>(EDevicesState.Loading);
  const [activeBrand, setActiveBrand] = useState<string>('');

  useEffect(() => {
    if (devices.length === 0) startFetchingDevices(setStatus, dispatch);
  }, [devices, dispatch]);

  const renderPanel = (): ReactElement | ReactElement[] => {
    switch (status) {
      case EDevicesState.Error:
        return (
          <ContainerBody>
            <Header>Got error while fetching devices list</Header>
            <Button onClick={(): void => startFetchingDevices(setStatus, dispatch)}>Try again</Button>
          </ContainerBody>
        );
      case EDevicesState.Devices:
        return renderBrands(devices, activeBrand, setActiveBrand);
      case EDevicesState.Loading:
      default:
        return <Loading finished={devices.length > 0} />;
    }
  };

  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <OverflowContainerBody $direction="row" $justify="space-evenly">
        {renderPanel()}
      </OverflowContainerBody>
    </Container>
  );
};

export default Devices;
