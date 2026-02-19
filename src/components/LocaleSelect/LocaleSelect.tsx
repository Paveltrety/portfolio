import classNames from 'classnames';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import { LOCALES_LIST } from '@/constants/locales';
import { useLocaleFromQuery } from '@/hooks/useLocaleFromQuery';
import { StaticI18nLink } from '@/i18n/withStaticI18n';

import styles from './LocaleSelect.module.scss';

export const LocaleSelect = () => {
  const languageSelectRef = useRef<HTMLDivElement>(null);
  const [isOpenedLanguageList, setOpenedLanguageList] = useState(false);

  const locale = useLocaleFromQuery();
  useClickAway(languageSelectRef, () => {
    setOpenedLanguageList(false);
  });

  const toogleLanguageList = () => {
    setOpenedLanguageList((state) => !state);
  };

  return (
    <article
      className={classNames(styles.root, {
        [styles.openedSelectList]: isOpenedLanguageList,
      })}
      ref={languageSelectRef}
    >
      <button className={styles.selectButton} onClick={toogleLanguageList} type="button">
        <Image src={`/icons/countries/${locale}.svg`} alt="country icon" fill className={styles.flag} />
        <span className={styles.countryName}>{locale?.toLocaleUpperCase()}</span>
      </button>
      <div className={classNames(styles.selectListWrapper)}>
        <ul className={styles.selectList}>
          {LOCALES_LIST.map((itemLocale) => (
            <li
              key={itemLocale}
              className={classNames(styles.selectItem, { [styles.isActiveItem]: locale === itemLocale })}
              onClick={toogleLanguageList}
            >
              <StaticI18nLink locale={itemLocale}>
                <div className={styles.flagWrapper}>
                  <Image src={`/icons/countries/${itemLocale}.svg`} alt="country icon" fill className={styles.flag} />
                  <span className={styles.countryName}>{itemLocale.toLocaleUpperCase()}</span>
                </div>
              </StaticI18nLink>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
