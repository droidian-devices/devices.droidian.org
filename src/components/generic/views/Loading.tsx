import React from 'react';
import * as animation from '../../../animation';
import { ContainerBody, Header } from '../../customs';
import * as icons from '../../customs/icons';

const Loading: React.FC<{ finished: boolean }> = ({ finished }) => {
  return (
    <ContainerBody variants={animation.opacity} initial="init" animate="visible" exit="exit" $fillHeight>
      {finished ? (
        <Header>Loaded</Header>
      ) : (
        <>
          <Header>Loading</Header>
          <icons.LoadingCircle />
        </>
      )}
    </ContainerBody>
  );
};

export default Loading;
