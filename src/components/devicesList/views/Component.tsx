import type { ReactElement } from 'react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Container, OverflowContainerBody } from '../../customs';
import * as animation from '../../../animation';
import type { IDevice } from '../../../redux/types';
import * as hooks from '../../../redux';

const renderDevices = (devices: IDevice[]): ReactElement[] | ReactElement => {
  return devices.length > 0 ? (
    devices.map((d) => {
      return <h2 key={d.name}>{d.name}</h2>;
    })
  ) : (
    <h2>No devices supported in this category</h2>
  );
};

const DevicesList: React.FC = () => {
  const { category } = useParams();
  const [prepared, setPrepared] = useState<IDevice[]>([]);
  const { devices } = useSelector(hooks.devicesState);

  useEffect(() => {
    setPrepared(devices.filter((d) => d.category === category));
  }, [category, devices]);

  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <OverflowContainerBody $justify="space-evenly">{renderDevices(prepared)}</OverflowContainerBody>
    </Container>
  );
};

export default DevicesList;
