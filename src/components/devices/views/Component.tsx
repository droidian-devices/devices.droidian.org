import type { ReactElement } from 'react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header } from '../../customs';
import * as animation from '../../../animation';
import * as hooks from '../../../redux';
import { getDevices } from '../../devicesCategories/controller';
import Loading from '../../generic/views/Loading';
import { DeviceContainer, FeaturesContainer } from '../themed';
import { renderDescription, renderFeatures, renderNotes } from './Renderer';
import type { IDevice } from '../../../types';

const renderDevice = (device: IDevice | undefined): ReactElement[] | ReactElement => {
  return device ? (
    <>
      <Header>{device.name}</Header>
      <FeaturesContainer>{renderDescription(device)}</FeaturesContainer>
      <FeaturesContainer>{renderFeatures(device)}</FeaturesContainer>
      <FeaturesContainer>{renderNotes(device)}</FeaturesContainer>
    </>
  ) : (
    <Header>Selected device does not exist</Header>
  );
};

const Devices: React.FC = () => {
  const dispatch = useDispatch();
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
      getDevices()
        .then((devices) => {
          setLoading(false);
          return dispatch(hooks.addDevices(devices));
        })
        .catch((err) => {
          console.info(err);
          setLoading(false);
        });
    }
  }, [devices.length, dispatch]);

  return loading ? (
    <Loading finished={loading} />
  ) : (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit" $overflow>
      <DeviceContainer $justify="space-evenly">{renderDevice(target)}</DeviceContainer>
    </Container>
  );
};

export default Devices;
