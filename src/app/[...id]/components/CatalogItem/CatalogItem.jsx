import styles from './CatalogItem.module.scss';
import Image from 'next/image';
import Container from '@/app/components/Container/Container';
import ProductDescription from '../productDescription/ProductDescription';
import CardDesignEl from '../cardDesignEl/CardDesignEl';
import ImageListSlider from './ImageListSlider/ImageListSlider';

const colors = [
  {
    id: '1',
    src: '/images/colors/color2.png',
    color: 'Дуб сонома',
  },
  {
    id: '2',
    src: '/images/colors/color2.png',
    color: 'Дуб трюфель',
  },
  {
    id: '3',
    src: '/images/colors/color3.png',
    color: 'Білий',
  },
  {
    id: '4',
    src: '/images/colors/color4.png',
    color: 'Дуб венге',
  },
  {
    id: '5',
    src: '/images/colors/color5.png',
    color: 'Ясен шимо',
  },
  {
    id: '6',
    src: '/images/colors/color6.png',
    color: 'Шамоні світлий',
  },
];

export default function CatalogItem({ data }) {
  return (
    <>
      <section>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.itemSlider}>
              <ImageListSlider />
            </div>
            <div className={styles.itemAbout}>
              <h3 className={styles.title}>{data.name}</h3>
              <p className={styles.article}>Артикул: {data.article}</p>
              <p className={styles.colorTitle}>Колір:</p>
              <ul className={styles.colors}>
                {colors.map(el => (
                  <li key={el.id} className={styles.colorItem}>
                    <Image
                      src={el.src}
                      width={100}
                      height={100}
                      alt={el.color}
                      className={styles.colorImgItem}
                    />
                    <span className={styles.colorTextItem}>{el.color}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.btnPriceWrappper}>
                <p className={styles.price}>від {data.price} грн</p>
                <button className={styles.orderButton}>Замовити</button>
              </div>
            </div>
          </div>
          <ProductDescription data={data} />
          <CardDesignEl />
        </Container>
      </section>
    </>
  );
}
