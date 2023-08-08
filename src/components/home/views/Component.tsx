import React from 'react';
import { Container, Header, Link, OverflowContainerBody, PanelHeader } from '../../customs';
import * as animation from '../../../animation';
import { HomeHeader, HomeIcon } from '../themed';

const Home: React.FC = () => {
  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <OverflowContainerBody $justify="space-evenly" $direction="row" $align="flex-start">
        <HomeHeader>
          <div>
            <PanelHeader>Droidian devices</PanelHeader>
          </div>
        </HomeHeader>
        <Link to="devices">
          <HomeIcon>
            <i className="icon-ok-squared" />
            <Header $full>Devices</Header>
            <p>Devices that can run Droidian</p>
          </HomeIcon>
        </Link>

        <Link to="https://github.com/droidian/porting-guide">
          <HomeIcon>
            <i className="icon-graduation-cap" />
            <Header $full>Porting guide</Header>
            <p>Official Droidian devices porting guide</p>
          </HomeIcon>
        </Link>

        <Link to="https://github.com/droidian-images/droidian/releases">
          <HomeIcon>
            <i className="icon-download" />
            <Header $full>Get droidian</Header>
            <p>Latest images from CI</p>
          </HomeIcon>
        </Link>
      </OverflowContainerBody>
    </Container>
  );
};

export default Home;
