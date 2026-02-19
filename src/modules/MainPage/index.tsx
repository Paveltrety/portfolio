import { Trans, useTranslation } from 'react-i18next';

import { Card } from '@/components/Card/Card';

import { ResumesList } from '../../components/ResumesList/ResumesList';
import styles from './MainPage.module.scss';

const TextAboutPhoto = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className={styles.dekstopShow}>{t('main.about_photo')}</p>
      <p className={styles.mobileShow}>{t('main.about_photo_mobile')}</p>
    </>
  );
};

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Card>
      <h1 className={styles.title}>{t('main.title')}</h1>
      <br />
      <TextAboutPhoto />
      <br />
      <p>
        <Trans
          i18nKey={t('main.about_stack')}
          t={t}
          components={{
            b: <b />,
          }}
        />
      </p>
      <br />
      <p>
        <Trans
          i18nKey={t('main.about_resume')}
          t={t}
          components={{
            b: <b />,
          }}
        />
      </p>
      <ResumesList className={styles.resumes} />
    </Card>
  );
};

export default MainPage;
