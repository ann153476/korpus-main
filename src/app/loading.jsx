'use client';
import styles from '../app/[...id]/loading.module.scss';
import { ColorRing } from 'react-loader-spinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.spinner}>
      <ColorRing
        visible={true}
        height="300"
        width="300"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#FFE0B2', '#263238', '#FFE0B2', '#263238', '#FFE0B2']}
        className={styles.colorRing}
      />
    </div>
  );
}
