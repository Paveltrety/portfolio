import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/constants/routes';
import { usePathnameWithoutLocale } from '@/hooks/usePathnameWithoutLocale';
import { StaticI18nLink } from '@/i18n/withStaticI18n';

import styles from './Header.module.scss';

export const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathnameWithoutLocale();

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <div className={styles.root}>
      <StaticI18nLink
        className={cn(styles.link, {
          [styles.active]: isActiveLink(Routes.main),
        })}
        href={Routes.main}
      >
        {t('navbar.about_me')}
      </StaticI18nLink>
      <StaticI18nLink
        className={cn(styles.link, {
          [styles.active]: isActiveLink(Routes.feed),
        })}
        href={Routes.feed}
      >
        {t('navbar.feed')}
      </StaticI18nLink>
      <StaticI18nLink
        className={cn(styles.link, {
          [styles.active]: isActiveLink(Routes.books),
        })}
        href={Routes.books}
      >
        {t('navbar.books')}
      </StaticI18nLink>
      <StaticI18nLink
        className={cn(styles.link, {
          [styles.active]: isActiveLink(Routes.contacts),
        })}
        href={Routes.contacts}
      >
        {t('navbar.connection')}
      </StaticI18nLink>
    </div>
  );
};
