import React from 'react';
import * as animation from '../../../animation';
import { FooterBody, FooterContainer, HomeButton } from '../themed';

const Footer: React.FC = () => {
  return (
    <FooterContainer variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <FooterBody>
        <HomeButton /> Droidian 2023
      </FooterBody>
    </FooterContainer>
  );
};

export default Footer;
