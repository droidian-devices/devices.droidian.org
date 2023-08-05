import type React from 'react';

const toggleNavbar = (setAppActive: React.Dispatch<React.SetStateAction<boolean>>, appActive: boolean): void => {
  if (!appActive) {
    setAppActive(true);
  } else {
    setAppActive(false);
  }
};

export default toggleNavbar;
