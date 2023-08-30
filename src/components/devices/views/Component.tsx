import type { ReactElement } from 'react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import type { Dispatch } from '@reduxjs/toolkit';
import { Container, Header } from '../../customs';
import * as animation from '../../../animation';
import * as hooks from '../../../redux';
import Loading from '../../generic/views/Loading';
import { DeviceContainer, FeaturesContainer } from '../themed';
import { renderDescription, renderFeatures, renderNotes } from './Renderer';
import type { IDevice, INotes } from '../../../types';
import type { ENoteType } from '../../../enums';
import { useMainDispatch } from '../../../redux/hooks';
import getDevices from '../../../devices/controller';

const renderDevice = (device: IDevice | undefined, dispatch: Dispatch): ReactElement[] | ReactElement => {
  const baseKeys = ['name', 'category', 'code', 'description', 'features'];
  const data = device ? Object.keys(device).filter((e) => !baseKeys.includes(e)) : [];

  return device ? (
    <>
      <Header>{device.name}</Header>
      <FeaturesContainer>{renderDescription(device)}</FeaturesContainer>
      <FeaturesContainer>{renderFeatures(device)}</FeaturesContainer>
      {data.map((e) => {
        return (
          <FeaturesContainer key={e}>
            {renderNotes(e, device[e] as Record<string, INotes<ENoteType>[]>, dispatch)}
          </FeaturesContainer>
        );
      })}
    </>
  ) : (
    <Header>Selected device does not exist</Header>
  );
};

const Devices: React.FC = () => {
  const dispatch = useMainDispatch();
  const { device } = useParams();
  const { devices } = useSelector(hooks.devicesState);
  const [loading, setLoading] = useState<boolean>(false);
  const [target, setTarget] = useState<IDevice | undefined>(undefined);

  useEffect(() => {
    setTarget(devices.find((d) => d.code === device));
  }, [device, devices]);

  useEffect(() => {
    if (devices.length === 0) {
      setLoading(true);
      const devices = getDevices();
      setLoading(false);
      dispatch(hooks.addDevices(devices));
    }
  }, [devices.length, dispatch]);

  return loading ? (
    <Loading finished={loading} />
  ) : (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit" $overflow>
      <DeviceContainer $justify="space-evenly">{renderDevice(target, dispatch)}</DeviceContainer>
    </Container>
  );
};

export default Devices;
