import styles from './Container.module.scss';

export default function Container({ className = '', children }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
