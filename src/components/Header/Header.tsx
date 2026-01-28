import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Routes } from '@/constants/routes';

import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();
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
        {t('navbar.books')}
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
