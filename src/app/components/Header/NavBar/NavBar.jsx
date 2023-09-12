'use client';

import items from '../navBarData.json';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import BurgerButton from '../BurgerButton/BurgerButton';
import NavBarItems from './NavBarItems/NavBarItems';
import s from './NavBar.module.scss';
import Container from '../../Container/Container';

export default function NavBar({
  categories,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showInnerMenu, setShowInnerMenu] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(max-width: 1199px)');

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMenu]);

  function handleMenuToggle() {
    setShowMenu(prev => !prev);
  }

  const handleShowInnerMenu = () => {
    setShowInnerMenu(true);
  };

  const handleHideInnerMenu = () => {
    setShowInnerMenu(false);
  };

  return (
    <>
      {isMobile && (
        <BurgerButton showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
      )}
      <nav className={`${s.nawBar} ${isMobile && showMenu ? s.show : ''}`}>
        <Container>
          <ul className={s.categoriesList}>
            {items.map(item => {
              if (isTablet && !isMobile && item.id === '6') {
                return;
              }
              return (
                <NavBarItems
                  key={item.id}
                  item={item}
                  categories={categories}
                  handleMenuToggle={handleMenuToggle}
                  showInnerMenu={showInnerMenu}
                  handleShowInnerMenu={handleShowInnerMenu}
                  handleHideInnerMenu={handleHideInnerMenu}
                />
              );
            })}
          </ul>
        </Container>
      </nav>
    </>
  );
}
