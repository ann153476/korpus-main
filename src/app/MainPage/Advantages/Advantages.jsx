import advantagesData from './advantagesData.json';
import Container from '@/app/components/Container/Container';
import s from './Advantages.module.scss';

const images = [
  '/images/advantages/advantage1@2x.jpg',
  '/images/advantages/advantage2@2x.jpg',
  '/images/advantages/advantage3@2x.jpg',
  '/images/advantages/advantage4@2x.jpg',
];

export default function Advantages() {
  return (
    <section className={s.advantages}>
      <Container>
        <ul className={s.advantagesList}>
          {advantagesData.map(({ id, text }, index) => (
            <li key={id} className={s.advantageItem}>
              <div
                className={s.advantageImage}
                style={{ backgroundImage: `url(${images[index]})` }}
              >
                <div className={s.advantageInner}>
                  <p className={s.advantageText}>{text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
