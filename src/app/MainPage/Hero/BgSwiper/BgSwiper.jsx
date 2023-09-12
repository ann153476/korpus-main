'use client';

import { useState, useEffect } from 'react';

import styles from './BgSwiper.module.scss';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Pagination from './Pagination/Pagination';

const bgImages = {
  mobile: [
    '/images/hero/hero-mob@2x.jpg',
    '/images/hero/hero-mob2.jpg',
    '/images/hero/hero-mob3.jpg',
  ],
  desktop: [
    '/images/hero/hero-desk@2x.jpg',
    '/images/hero/hero-desk2@2x.jpg',
    '/images/hero/hero-desk3@2x.jpg',
  ],
};

export default function BgSwiper({ children }) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [imageIndex, setImageIndex] = useState(0);

  const imageList = isMobile ? bgImages.mobile : bgImages.desktop;

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      if (imageIndex + 1 < imageList.length) {
        setImageIndex(prev => prev + 1);
      } else {
        setImageIndex(0);
      }
    }, 5000);

    return () => window.clearInterval(intervalID);
  }, [imageIndex, imageList]);

  var imgSrc = imageList[imageIndex];

  return (
    <div
      className={styles.swiper}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
      <div className={styles.pagination}>
        <Pagination
          amount={imageList.length}
          onClick={i => setImageIndex(i)}
          activeIndex={imageIndex}
        />
      </div>
    </div>
  );
}
