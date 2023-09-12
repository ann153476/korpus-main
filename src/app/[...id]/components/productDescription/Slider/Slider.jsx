'use client';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Slider.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default ({ images }) => {
  return (
    <>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 7000 }}
        speed={1000}
        navigation
        loop
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.url}
              className={styles.slide}
              alt={`Slide ${index}`}
              width={1000}
              height={800}
            />
            <Link href={`/`} className={styles.aboutButton}>
              Детальніше
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
