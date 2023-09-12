'use client'

import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';

export default function ScrollLink({
  className,
  link,
  scrollLink,
  children,
  isMobile = false,
  handleMenuToggle = () => {},
}) {

  return (
    <Link href={link} legacyBehavior={true}>
      <Scroll
        className={className}
        to={scrollLink}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={isMobile ? handleMenuToggle : () => {}}
      >
        {children}
      </Scroll>
    </Link>
  );
}
