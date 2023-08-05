import React from 'react';
import { Container, ContainerBody, PanelHeader } from '../../customs';
import * as animation from '../../../animation';
import { HomeHeader } from '../themed';

const Home: React.FC = () => {
  return (
    <Container variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <HomeHeader>
        <div>
          <PanelHeader>Droidian devices</PanelHeader>
        </div>
      </HomeHeader>
      <ContainerBody $justify="space-between">Home page</ContainerBody>
    </Container>
  );
};

export default Home;
