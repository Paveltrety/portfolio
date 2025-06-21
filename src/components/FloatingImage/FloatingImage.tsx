import Image from 'next/image';

import styles from './FloatingImage.module.scss';

export const FloatingImage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <Image src="/images/beach-head.jpg" alt="Floating image" width={100} height={100} className={styles.image} />
      </div>
    </div>
  );
};
