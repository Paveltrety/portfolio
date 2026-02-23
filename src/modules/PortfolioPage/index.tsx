import { useTranslation } from 'react-i18next';

import { PortfolioItem } from './components/PortfolioItem/PortfolioItem';
import { getPortfolioList } from './portfolio.data';
import styles from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  const { t } = useTranslation();
  const portfolioList = getPortfolioList(t);
  return (
    <>
      <h1 className={styles.title}>{t('portfolio.title')}</h1>
      <p className={styles.description}>{t('portfolio.description')}</p>
      <div className={styles.wrapper}>
        {portfolioList.map(({ id, ...otherParams }) => (
          <PortfolioItem key={id} id={id} {...otherParams} />
        ))}
      </div>
    </>
  );
};

export default PortfolioPage;
