import React from 'react';
import s from './BurgerButton.module.scss';

export default function BurgerButton({ showMenu, handleMenuToggle }) {
  return (
    <div className={s.burgerWrap} onClick={handleMenuToggle}>
      <div className={`${s.burger} ${showMenu ? s.active : ''}`}></div>
    </div>
  );
}
