// @client
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Promotions.module.scss';
import PromotionItem from './PromotionItem/PromotionItem';

// Встановлюємо плагіни
SwiperCore.use([Navigation]);

const promotionsData = [
  {
    name: 'RIO',
    src: '/images/promotions/RIO.jpg',
    oldPrice: '20230',
    newPrice: '18230',
  },
  {
    name: 'MIA',
    src: '/images/promotions/MIA.jpg',
    oldPrice: '22230',
    newPrice: '20230',
  },
  {
    name: 'MOCCO',
    src: '/images/promotions/MOCCO.jpg',
    oldPrice: '24230',
    newPrice: '22230',
  },
  {
    name: 'MILANO',
    src: '/images/promotions/MILANO.jpg',
    oldPrice: '26230',
    newPrice: '24230',
  },
  {
    name: 'RIMO',
    src: '/images/promotions/RIMO.jpg',
    oldPrice: '28230',
    newPrice: '26230',
  },
  {
    name: 'GRANDO',
    src: '/images/promotions/GRANDO.jpg',
    oldPrice: '30230',
    newPrice: '28230',
  },
  // ...інші зображення...
];

const Promotions = () => {
  return (
<section className={`${styles.promotionContainer} container`} id="promotions">
      <h2 className={styles.promotionTitle}>АКЦІЇ</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          // Коли екран є 375px або більше
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Коли екран є 1440px або більше(900 бо якщо меньше то не вмістяться 2 картинки)
          900: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {promotionsData.map((promotion, index) => (
          <SwiperSlide key={index}>
            <PromotionItem promotion={promotion} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Promotions;
