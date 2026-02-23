import Image from 'next/image';

import AngleRightIcon from '@/assets/icons/angle-right.svg';
import { StaticI18nLink } from '@/i18n/withStaticI18n';
import { IPortfolioItem } from '@/types/portfolio';

import styles from './PortfolioItem.module.scss';

export const PortfolioItem = ({ title, description, image, href }: IPortfolioItem) => {
  return (
    <StaticI18nLink className={styles.root} href={href}>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <AngleRightIcon className={styles.icon} />
        </div>
        <span className={styles.description}>{description}</span>
      </div>
      <Image
        src={`/images/portfolio/${image}`}
        alt="image"
        className={styles.image}
        width={300}
        height={100}
        sizes="(max-width: 1010px) 100vw, 1010px"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '500px',
          margin: '0 auto',
        }}
      />
    </StaticI18nLink>
  );
};
