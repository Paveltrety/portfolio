import Image from 'next/image';

import styles from './Item.module.scss';
import { Button } from '@/components/ui/Button/Button';

interface IItemProps {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
}

export const Item = ({ imageSrc, name, price }: IItemProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image src={imageSrc} alt={name} fill />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>₽{price}</span>
      <Button text="Добавить в корзину" />
    </div>
  );
};
