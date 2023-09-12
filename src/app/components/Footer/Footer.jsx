import Image from 'next/image';
import Link from 'next/link';
import ScrollLink from '../ScrollLink/ScrollLink';
import Container from '../Container/Container';
import styles from './Footer.module.scss';
import logo from '../../../image/Logo.png';

async function getCategory() {
  const response = await fetch(`https://korpus.onrender.com/api/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Footer() {
  const categoryList = await getCategory();
  console.log(categoryList);

  return (
    <footer className={styles.footer}>
      <Container>
        <section className={styles.wrapper}>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" />
          </div>
          <div className={styles.aboutUs}>
            <h3 className={styles.title}>Про нас</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <ScrollLink
                  className={styles.item}
                  link="/#about"
                  scrollLink="about"
                >
                  Про Компанію
                </ScrollLink>
              </li>
              <li className={styles.item}>
                <ScrollLink
                  className={styles.item}
                  link="/#projects"
                  scrollLink="projects"
                >
                  Наші проекти
                </ScrollLink>
              </li>
              {/* <li className={styles.item}>Акції</li> */}
              <li className={styles.item}>
                <ScrollLink
                  className={styles.item}
                  link="/#feedbacks"
                  scrollLink="feedbacks"
                >
                  Відгуки
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className={styles.catalog}>
            <h3 className={styles.title}>Каталог</h3>
            <ul className={styles.catalogList}>
              {categoryList.map(el => (
                <li className={styles.item}>
                  <Link href={`/${el.name}`} className={styles.itemLink}>
                    {el.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contacts}>
            <h3 className={styles.title}>Контакти</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a className={styles.itemLink} href="tel:+38 095 555 55 22">
                  +38 095 555 55 22
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.itemLink} href="mailto:korpus@gmail.com">
                  korpus@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Container>
      <section className={styles.root}>
        <Container>
          <p className={styles.rootText}>
            2023 © Всі права захищені. Копіювання заборонено.
          </p>
          <br />
          <p className={styles.rootText}>Сайт розроблено компанією “DevCore”</p>
        </Container>
      </section>
    </footer>
  );
}
