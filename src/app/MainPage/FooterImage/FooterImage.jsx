import styles from './FooterImage.module.scss';
import image from '@/image/footerImage.jpg';
import Image from 'next/image';

export default function FooterImage() {
  return (
    <div className={styles.footerImageWrapper}>
      <Image
        src={image}
        width={1440}
        height={600}
        className={styles.foterImage}
      />
    </div>
  );
}
