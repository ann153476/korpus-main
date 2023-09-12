'use client';

import Image from 'next/image';
import styles from './ImageListSlider.module.scss';
import { useState } from 'react';

export default function ImageListSlider() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Локальний масив зображень без поля "id"
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

    // Додайте інші зображення за потребою
  ];

  const selectedImage = images[selectedImageIndex];

  const handleSelectedImageChange = idx => {
    setSelectedImageIndex(idx);
  };

  const handleRightClick = () => {
    setSelectedImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handleLeftClick = () => {
    setSelectedImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.selectedImage}>
        <Image
          src={selectedImage.url}
          alt="productIMG"
          width={1000}
          height={800}
          className={styles.headImg}
        />
        <div className={styles.buttonWrap}>
          <button className={styles.carouselButton} onClick={handleLeftClick}>
            <Image
              src="/images/productItem/arrowLeft.svg"
              width={30}
              height={30}
              alt="Arrow left"
            />
          </button>
          <button
            className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
            onClick={handleRightClick}
          >
            <Image
              src="/images/productItem/arrowRight.svg"
              width={30}
              height={30}
              alt="Arrow right"
            />
          </button>
        </div>
      </div>

      <div className={styles.carouselImages}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`${styles.carouselImage} ${
              selectedImageIndex === idx && styles.imgHeadSelected
            }`}
            onClick={() => handleSelectedImageChange(idx)}
          >
            <Image
              src={image.url}
              className={styles.imgList}
              width={150}
              height={100}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
