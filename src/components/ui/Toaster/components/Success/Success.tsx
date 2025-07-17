import Image from 'next/image';
import styles from './Success.module.scss';
import { ReactNode } from 'react';

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
