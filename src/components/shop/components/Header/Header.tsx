import Link from 'next/link';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';

import cn from 'classnames';
import { Routes } from '@/constants/routes';
import Image from 'next/image';

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className={styles.root}>
      <Link
        className={cn(styles.link, {
          [styles.active]: pathname === Routes.main,
        })}
        href={Routes.main}
      >
        Главная
      </Link>

      <Link
        className={cn(styles.link, {
          [styles.active]: pathname === Routes.shop,
        })}
        href={Routes.shopCatalog}
      >
        Каталог
      </Link>
      <button className={styles.basketIcon}>
        <Image src={'/icons/basket.svg'} fill alt="basket" />
      </button>
    </div>
  );
};
