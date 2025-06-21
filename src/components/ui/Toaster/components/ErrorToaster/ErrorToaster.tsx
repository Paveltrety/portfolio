import Image from 'next/image';

import styles from './ErrorToaster.module.scss';

interface IErrorToasterProps {
  message: React.ReactNode;
}

export const ErrorToaster = ({ message }: IErrorToasterProps) => (
  <div className={styles.root}>
    <div className={styles.colorLabel} />
    <Image src={'/icons/error.svg'} width={32} height={32} alt="error" />

    <span className={styles.message}>{message}</span>
  </div>
);
