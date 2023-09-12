'use client';

import styles from './Portfolio.module.scss';
import Container from '@/app/components/Container/Container';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  {
    url: 'https://shurup.net.ua/image/cache/data/59/31/556dd0b8bd066cbc447358d21a3f09b0-750x560.jpg',
  },
  {
    url: 'https://shurup.net.ua/image/cache/data/53/31/03501e32f6511402783d7cc00ffa1f16-750x560.jpg',
  },
  {
    url: 'https://shurup.net.ua/image/cache/data/60/31/684300077caf87e4ae06259441a4c0a5-750x560.jpg',
  },
  {
    url: 'https://shurup.net.ua/image/cache/data/64/31/2395e7268c445bf480f1475d7b660d68-750x560.jpg',
  },
  {
    url: 'https://shurup.net.ua/image/cache/data/64/31/2395e7268c445bf480f1475d7b660d68-750x560.jpg',
  },
];

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id='projects'>
      <Container>
        <div className={styles.porfolioWrapper}>
          <div className={styles.blackAccent}></div>
          <h2 className={styles.title}>НАШІ ПРОЕКТИ</h2>
          <div className={styles.sliderWrapper}>
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
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide className={styles.swiperSlide} key={index}>
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
