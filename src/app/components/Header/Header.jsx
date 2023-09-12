import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import Container from '../Container/Container';
import s from './Header.module.scss';

async function getCategory() {
  const response = await fetch(`https://korpus.onrender.com/api/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Header() {
  const categories = await getCategory();

  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <Logo />
        <NavBar categories={categories} />
      </Container>
    </header>
  );
}
