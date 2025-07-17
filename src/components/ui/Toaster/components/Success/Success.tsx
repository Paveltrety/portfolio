import Image from 'next/image';
import { ReactNode } from 'react';

import styles from './Success.module.scss';

interface ISuccessProps {
  message: ReactNode;
}

export const Success = ({ message }: ISuccessProps) => (
  <div className={styles.root}>
    <div className={styles.colorLabel} />
    <Image src={'/icons/success.svg'} width={32} height={32} alt="success" />

    <span className={styles.message}>{message}</span>
  </div>
);
