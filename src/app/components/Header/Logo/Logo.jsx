import Image from 'next/image';
import Link from 'next/link';
import s from './Logo.module.scss';

export default function Logo() {
  return (
    <Link href="/" className={s.logoLink}>
      <Image
        src="/images/logo.svg"
        alt="Logotype"
        width={21}
        height={24}
        className={s.logo}
        priority
      />
      <p className={s.logoText}>korpus</p>
    </Link>
  );
}
