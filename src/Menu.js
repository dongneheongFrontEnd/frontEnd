// Menu.js

import React from 'react';
import './Menu.css';

const Menu = ({ activeMenu, handleMenuClick }) => {
  return (
    <div>
      <div
        className={`search ${activeMenu === 'search' ? 'active' : ''}`}
        onClick={() => handleMenuClick('search')}
      >
        동네형 찾기
      </div>
      <div
        className={`regist ${activeMenu === 'register' ? 'active' : ''}`}
        onClick={() => handleMenuClick('register')}
      >
        동네형 등록
      </div>
      <div className={`login ${activeMenu === 'login' ? 'active' : ''}`} onClick={() => handleMenuClick('login')}>
        로그인/회원가입
      </div>
    </div>
  );
};

export default Menu;