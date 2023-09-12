import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import styles from '../Promotions.module.scss';

function formatNumber(num) {
  return new Intl.NumberFormat('uk-UA').format(num);
}

const PromotionItem = ({ promotion }) => {
  return (
    <SwiperSlide>
      <figure>
        <img
          className={styles.kitchenImage}
          src={promotion.src}
          alt={`Кухня ${promotion.name}`}
        />
        <figcaption className={styles.slideContent}>
          <div className={styles.mainContent}>
            <h3 className={styles.title}>Кухня {promotion.name}</h3>
            <div className={styles.price}>
              <p className={styles.oldPrice}>
                {formatNumber(promotion.oldPrice)} грн
              </p>
              <p className={styles.newPrice}>
                {formatNumber(promotion.newPrice)} грн
              </p>
            </div>
            <button className={styles.button}>Докладніше</button>
          </div>
        </figcaption>
      </figure>
    </SwiperSlide>
  );
};

export default PromotionItem;
