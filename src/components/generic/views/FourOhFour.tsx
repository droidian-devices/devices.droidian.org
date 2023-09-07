import React from 'react';
import * as animation from '../../../animation';
import { Container, ContainerBody, Header, Link } from '../../customs';

const FourOhFour: React.FC = () => {
  return (
    <Container variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody $justify="center" $direction="row" $align="center">
        <Header>
          Got lost ?
          <p>
            <Link to="/">Go Home</Link>
          </p>
        </Header>
      </ContainerBody>
    </Container>
  );
};

export default FourOhFour;
