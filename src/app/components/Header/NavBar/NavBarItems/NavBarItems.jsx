'use client';

import Link from 'next/link';
import ScrollLink from '@/app/components/ScrollLink/ScrollLink';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import s from './NavBarItems.module.scss';

export default function NavBarItems({
  item,
  categories,
  handleMenuToggle,
  showInnerMenu,
  handleShowInnerMenu,
  handleHideInnerMenu,
}) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {item.text === 'каталог' && (
        <li className={s.categoryItem} onMouseEnter={handleShowInnerMenu}>
          <div className={s.linkBox}>
            <Link href={item.link} className={s.navLink}>
              {item.text}
            </Link>
            <button className={`${s.navBtn} ${showInnerMenu ? s.rotate : ''}`}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                className={s.vectorIcon}
              >
                <path d="M22.12 11.453l-6.12 6.107-6.12-6.107-1.88 1.88 8 8 8-8-1.88-1.88z"></path>
              </svg>
            </button>
          </div>
          {showInnerMenu && (
            <div
              className={s.innerBox}
              onMouseEnter={handleShowInnerMenu}
              onMouseLeave={handleHideInnerMenu}
            >
              <ul className={s.innerList}>
                {categories.map(({ _id: id, name, text }) => (
                  <li key={id} className={s.innerItem}>
                    <Link
                      href={`/${name}`}
                      className={s.navLink}
                      onClick={isMobile ? handleMenuToggle : () => {}}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      )}
      {item.text !== 'каталог' && (
        <li
          className={`${s.categoryItem} ${
            isMobile && item.id === '6' && s.contact
          }`}
        >
          <ScrollLink
            className={s.navLink}
            link={item.link}
            scrollLink={item.scrollLink}
            isMobile={isMobile}
            handleMenuToggle={handleMenuToggle}
          >
            {item.text}
          </ScrollLink>
        </li>
      )}
    </>
  );
}
