'use client';
import { useState } from 'react';
import styles from './ProductDescription.module.scss';
import Slider from './Slider/Slider';

export default function ProductDescription({ data }) {
  const [activeLink, setActiveLink] = useState('description');

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

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  return (
    <section className={styles.productDescrSection}>
      <div className={styles.productDescriptionLinks}>
        <button
          className={`${styles.link} ${
            activeLink === 'description' ? styles.active : ''
          }`}
          onClick={() => handleLinkClick('description')}
        >
          Опис
        </button>
        <button
          className={`${styles.link} ${
            activeLink === 'characteristics' ? styles.active : ''
          }`}
          onClick={() => handleLinkClick('characteristics')}
        >
          Характеристики
        </button>
      </div>
      <div className={styles.productDesc}>
        {activeLink === 'description' ? (
          <div className={styles.productDescText}>
            <h3 className={styles.title}>Модульна кухня "{data.name}"</h3>
            <div>{data.description}</div>
          </div>
        ) : (
          <div className={styles.productDescText}>
            <h2 className={styles.title}>Характеристика</h2>
            <div className={styles.productCharacteristics}>
              <ul className={styles.productCharacteristicsList}>
                {Object.entries(data.properties).map(([key, value]) => (
                  <li className={styles.productCharacteristicsItem} key={key}>
                    <p className={styles.productCharacteristicsItemTitle}>
                      {key}
                    </p>
                    <p className={styles.productCharacteristicsValue}>
                      {value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className={styles.imgWrapped}>
          <h3 className={styles.title}>Перегляньте в інших категоріях</h3>
          <Slider images={images} />
        </div>
      </div>
    </section>
  );
}
