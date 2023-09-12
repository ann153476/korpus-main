'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import StarList from '../StarList/StarList';
import s from './FeedbacksSlider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

const FeedbacksSlider = ({ feedbacks }) => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1200px)');

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      autoplay={{ delay: 5000 }}
      speed={1000}
      navigation
      loop
      spaceBetween={20}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
      direction="horizontal"
      className={s.slider}
    >
      {feedbacks.map(item => {
        let text = item.comment;

        if (item.comment.length > 270) {
          text = item.comment.slice(0, 269) + '...';
        }

        if (item.comment.length > 220 && isTablet) {
          text = item.comment.slice(0, 219) + '...';
        }

        if (item.comment.length > 276 && isDesktop) {
          text = item.comment.slice(0, 275) + '...';
        }

        return (
          <SwiperSlide key={item.id} className={s.slide}>
            <div className={s.item}>
              <div className={s.innerBox}>
                <p className={s.userName}>{item.name}</p>
                <StarList rating={item.rating} />
              </div>
              <p className={s.comment}>{text}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FeedbacksSlider;
