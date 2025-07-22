import { Card } from '@/components/Card/Card';

import { ResumesList } from '../../components/ResumesList/ResumesList';
import styles from './MainPage.module.scss';

const TextAboutPhoto = () => {
  return (
    <>
      <p className={styles.dekstopShow}>
        Пока окончательно не определился куда лучше расположить свою фотку, поэтому пусть пока полетает на фоне (Не советую пытаться ее
        поймать)
      </p>
      <p className={styles.mobileShow}>
        Пока окончательно не определился куда лучше расположить свою фотку, поэтому пусть пока полетает сверху.
      </p>
    </>
  );
};

const MainPage = () => {
  return (
    <Card>
      <h1 className={styles.title}>Привет! Я Павел Третьяков - фронтенд раработчик.</h1>
      <br />
      <TextAboutPhoto />
      <br />
      <p>
        Работаю за деньги с ReactJS, Next.js, TypeScript <b>более 5 лет</b>.
      </p>
      <br />
      <p>
        Более подробная информация о моем коммерческом опыте в <b>резюме</b>:
      </p>
      <ResumesList className={styles.resumes} />
    </Card>
  );
};

export default MainPage;
