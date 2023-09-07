import React, { useState } from 'react';
import { HomeButton, NavbarBody, NavbarContainer, NavLinks, NavToggle } from '../themed';
import toggleNavbar from '../utils';
import { Link } from '../../customs';

const NavContent: React.FC<{ active: boolean; setActive: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  active,
  setActive,
}) => {
  return (
    <NavLinks $active={active} $justify="space-evenly" $align="flex-start" $wrap="nowrap">
      <Link to="https://droidian.org/">Home</Link>
      <Link to="https://droidian.org/blog">Blog</Link>
      <Link to="https://github.com/orgs/droidian/projects?query=is%3Aopen">Projects</Link>
      <Link to="/" onClick={(): void => toggleNavbar(setActive, active)}>
        Devices
      </Link>
      <Link to="https://github.com/droidian-images/droidian/releases">Images</Link>
      <Link to="https://github.com/droidian/droidian/issues">Bug tracker</Link>
    </NavLinks>
  );
};

const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <NavbarContainer>
      <NavbarBody $justify="space-between" $direction="row" $noScroll>
        <Link to="/">
          <HomeButton />
        </Link>
        <NavToggle $active={active} onClick={(): void => toggleNavbar(setActive, active)}>
          <div />
          <div />
          <div />
        </NavToggle>
      </NavbarBody>
      <NavContent active={active} setActive={setActive} />
    </NavbarContainer>
  );
};

export default Navbar;
