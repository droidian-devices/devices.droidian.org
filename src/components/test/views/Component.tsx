import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, ContainerBody, Green, Red } from '../../customs';
import * as animation from '../../../animation';
import { handleFileChange } from '../controller';

const Test: React.FC = () => {
  const dispatch = useDispatch();
  const [callback, setCallback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody $justify="space-evenly" $direction="column">
        {callback ? <Green>{callback}</Green> : null}
        {error ? <Red>{error}</Red> : null}
        <input
          type="file"
          accept=".json"
          onChange={(e): void => handleFileChange(e, setCallback, setError, dispatch)}
        />
      </ContainerBody>
    </Container>
  );
};

export default Test;
