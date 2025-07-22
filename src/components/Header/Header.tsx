import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Routes } from '@/constants/routes';

import styles from './Header.module.scss';

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
        Обо мне
      </Link>
      <Link
        className={cn(styles.link, {
          [styles.active]: pathname === Routes.feed,
        })}
        href={Routes.feed}
      >
        Лента
      </Link>
      <Link
        className={cn(styles.link, {
          [styles.active]: pathname === Routes.books,
        })}
        href={Routes.books}
      >
        Книги
      </Link>
      <Link
        className={cn(styles.link, {
          [styles.active]: pathname === Routes.contacts,
        })}
        href={Routes.contacts}
      >
        Связь
      </Link>
    </div>
  );
};
