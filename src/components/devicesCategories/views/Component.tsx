import type { ReactElement } from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { Container, Header, OverflowContainerBody } from '../../customs';
import * as animation from '../../../animation';
import { Category, CategoryContainer, CategoryOuterContainer } from '../themed';
import * as hooks from '../../../redux';
import Loading from '../../generic/views/Loading';
import getDevices from '../../../devices/controller';
import { EDeviceCategory } from '../../../enums';
import { DevicesRenderer } from './Renderer';
import type { IDevice } from '../../../types';
import { useMainSelector } from '../../../redux/hooks';
import type { MainDispatch } from '../../../store/types';

const renderCategories = (
  devices: IDevice[],
  active: EDeviceCategory | null,
  dispatch: MainDispatch,
): ReactElement[] => {
  const setActive = (active: EDeviceCategory | null): void => {
    dispatch(hooks.changeCategory({ active }));
  };

  return Object.values(EDeviceCategory).map((d) => {
    return (
      <>
        <CategoryContainer key={d} $active={active === d}>
          <Category $active={active === d} onClick={(): void => (active === d ? setActive(null) : setActive(d))}>
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
      </>
    );
  });
};

const DevicesCategories: React.FC = () => {
  const { devices } = useMainSelector(hooks.devicesState);
  const categories = useMainSelector(hooks.categoriesState);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<EDeviceCategory | null>(EDeviceCategory.Official);

  useEffect(() => {
    if (devices.length === 0) {
      setLoading(true);
      const devices = getDevices();
      setLoading(false);
      dispatch(hooks.addDevices(devices));
    }
  }, [devices.length, dispatch]);

  useEffect(() => {
    setActive(categories.active);
  }, [categories]);

  return loading ? (
    <Loading finished={loading} />
  ) : (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <OverflowContainerBody $direction="row" $justify="space-evenly">
        <CategoryOuterContainer>{renderCategories(devices, active, dispatch)}</CategoryOuterContainer>
      </OverflowContainerBody>
    </Container>
  );
};

export default DevicesCategories;
