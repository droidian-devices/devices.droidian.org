import type { ReactElement } from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { ContainerBody, Header } from '../../customs';
import * as animation from '../../../animation';
import { Category, CategoryContainer, DeviceCategoryContainer } from '../themed';
import * as hooks from '../../../redux';
import Loading from '../../generic/views/Loading';
import getDevices from '../../../devices/controller';
import { EDeviceCategory } from '../../../enums';
import { DevicesRenderer } from './Renderer';
import type { IDevice } from '../../../types';

const renderCategories = (
  devices: IDevice[],
  active: EDeviceCategory | undefined,
  setActive: React.Dispatch<React.SetStateAction<EDeviceCategory | undefined>>,
): ReactElement[] => {
  return Object.values(EDeviceCategory).map((d) => {
    return (
      <React.Fragment key={d}>
        <CategoryContainer $active={active === d}>
          <Category $active={active === d} onClick={(): void => (active === d ? setActive(undefined) : setActive(d))}>
            <Header>{d}</Header>
            <i className="icon-down-dir" />
          </Category>
        </CategoryContainer>
        <AnimatePresence mode="wait">
          {active === d ? (
            <DevicesRenderer
              devices={devices.filter((e) => e.category.trim().toLowerCase() === d.toLowerCase())}
              category={active}
            />
          ) : null}
        </AnimatePresence>
      </React.Fragment>
    );
  });
};

const DevicesCategories: React.FC = () => {
  const { devices } = useSelector(hooks.devicesState);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<EDeviceCategory | undefined>(EDeviceCategory.Official);

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
    <DeviceCategoryContainer variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody $direction="row" $justify="space-evenly">
        {renderCategories(devices, active, setActive)}
      </ContainerBody>
    </DeviceCategoryContainer>
  );
};

export default DevicesCategories;
