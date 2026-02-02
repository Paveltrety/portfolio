import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/constants/routes';

import styles from './Header.module.scss';

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
        {t('navbar.about_me')}
      </Link>
      <Link
        className={cn(styles.link, {
          [styles.active]: pathname === Routes.feed,
        })}
        href={Routes.feed}
      >
        {t('navbar.feed')}
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
        {t('navbar.connection')}
      </Link>
    </div>
  );
};
