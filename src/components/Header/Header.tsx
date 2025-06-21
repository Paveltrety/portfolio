import Link from 'next/link';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';

import cn from 'classnames';
import { Routes } from '@/constants/routes';

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
          [styles.active]: pathname === Routes.facts,
        })}
        href={Routes.facts}
      >
        Факты
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
