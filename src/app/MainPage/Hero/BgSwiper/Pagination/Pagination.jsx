import styles from './Pagination.module.scss';

export default function Pagination({ amount, activeIndex, onClick }) {
  const elements = [];

  for (let i = 0; i < amount; ++i) {
    const classNames =
      activeIndex === i ? `${styles.bullet} active` : styles.bullet;
    elements.push(
      <div
        key={i}
        className={styles['bullet-wrapper']}
        onClick={e => onClick(i)}
      >
        <span className={classNames}></span>
      </div>
    );
  }

  return <div className={styles.container}>{elements}</div>;
}
