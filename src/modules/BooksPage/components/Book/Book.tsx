import Image from 'next/image';

import styles from './Book.module.scss';
import { IBook } from '@/types/books';
import { Rating } from '@/components/ui/Rating/Rating';

interface IBookProps extends IBook {}

export const Book = ({ name, rate, image }: IBookProps) => {
  return (
    <div className={styles.root}>
      <Image className={styles.image} src={`/images/books/${image}`} alt={name} fill />

      <div className={styles.content}>
        <Rating rating={rate} />
      </div>
    </div>
  );
};
