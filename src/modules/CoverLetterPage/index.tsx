import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import AngleRightIcon from '@/assets/icons/angle-right.svg';
import { Badge } from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import { Routes } from '@/constants/routes';
import { StaticI18nLink } from '@/i18n/withStaticI18n';

import styles from './CoverLetterPage.module.scss';

const PROJECT_URL = 'https://paveltrety-cover-letter.vercel.app/';

const CoverLetterPage = () => {
  const { t } = useTranslation();

  const redirectToProject = () => {
    window.open(PROJECT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <StaticI18nLink href={Routes.portfolio} className={styles.backLink}>
        <AngleRightIcon className={styles.backIcon} />
        <span>{t('portfolio.backToPortfolio')}</span>
      </StaticI18nLink>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>{t('portfolio.coverLetter.title')}</h1>
          <span className={styles.subTitle}>{t('portfolio.coverLetter.subTitle')}</span>
        </div>
        <Button variant="black" onClick={redirectToProject} className={styles.button} text={t('portfolio.check')} />
      </div>
      <Image
        src={`/images/portfolio/big-cover-letter.png`}
        alt="cover letter site"
        className={styles.image}
        width={300}
        height={400}
        sizes="(max-width: 1010px) 100vw, 1010px"
        style={{
          width: '100%',
          maxHeight: '500px',
        }}
      />
      <div className={styles.content}>
        <div className={styles.description}>
          <h2 className={styles.title}>{t('portfolio.aboutProject')}</h2>
          <div className={styles.descriptionText}>
            <p>{t('portfolio.coverLetter.descriptionParagraphFirst')}</p>
            <br />
            <p>{t('portfolio.coverLetter.descriptionParagraphSecond')}</p>
          </div>
        </div>
        <div className={styles.infoProject}>
          <h2 className={styles.title}>{t('portfolio.technologies')}</h2>
          <a className={styles.gitHubLink} href="https://github.com/Paveltrety/cover-letter" target="_blank">
            GitHub Repo
          </a>
          <div className={styles.stack}>
            <Badge text="React" />
            <Badge text="Tanstack Query" />
            <Badge text="Tanstack Form" />
            <Badge text="Express.js" />
            <Badge text="AI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterPage;
