import { Card } from '@/components/Card/Card';

import styles from './FactsPage.module.scss';

const FactsPage = () => {
  return (
    <Card>
      <p className={styles.title}>Данный раздел будет обязательно пополняться!</p>
      <div>
        На разработку этого сайта ушло около 8 часов:
        <div className={styles.listWrapper}>
          <span>
            • <b>3 часа</b> на поиск макета. Судя по дизайну не сложно заметить, что подходящий макет я так и не нашел, поэтому решил
            двигаться по наитию.
          </span>
          <span>
            • <b>2 часа</b> на разработку.
          </span>
          <span>
            • <b>3 часа</b> чтобы разобраться с гребанным деплоем на сервер (добавление сертификатов, привязка домена, настройка nginx).
          </span>
        </div>
      </div>
    </Card>
  );
};

export default FactsPage;
