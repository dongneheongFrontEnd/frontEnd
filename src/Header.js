// Header.js

import React, { useState } from 'react';
import Menu from './Menu';
import './Header.css';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    < div className="header">
      <div className="logo">동네형(로고)</div>
      <Menu activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
    </div>
  );
};

export default Header;
