import Container from '@/app/components/Container/Container';
import BgSwiper from './BgSwiper/BgSwiper';

import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.section}>
      <BgSwiper>
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Створіть простір своєї мрії з нами!
            </h1>
            <p className={styles.subtitle}>
              Замовте прорахунок меблів вже сьогодні і втіліть свої ідеї в
              реальність.
            </p>
          </div>
        </Container>
      </BgSwiper>
    </section>
  );
}
