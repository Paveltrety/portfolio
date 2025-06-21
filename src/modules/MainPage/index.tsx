import { Card } from '@/components/Card/Card';

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
      <p>Привет! Я Павел Третьяков - фронтенд раработчик.</p>
      <br />
      <TextAboutPhoto />
      <br />
      <p>
        В какой-то момент возникает желание оставить свой след в интернете. Поэтому пока начну с этого простенького сайта, а дальше по
        ситуации.
      </p>
      <br />
    </Card>
  );
};

export default MainPage;
