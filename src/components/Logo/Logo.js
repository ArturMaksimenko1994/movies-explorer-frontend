import React from 'react';
import './Logo.css';
import SVG from 'react-inlinesvg';

import logoImg from '../../images/Logo/logo.svg';

const Logo = () => (
  <SVG className="logo__image" src={logoImg} />
);

export default Logo;
