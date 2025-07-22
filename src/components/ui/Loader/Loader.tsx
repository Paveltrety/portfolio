import Image from 'next/image';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.root}>
      <Image className={styles.loader} width={32} height={32} src={'/icons/loader.svg'} alt="Loader" />
    </div>
  );
};
