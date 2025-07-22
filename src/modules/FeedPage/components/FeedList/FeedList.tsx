import dayjs from 'dayjs';

import { IFeedItem } from '@/types/feed';

import styles from './FeedList.module.scss';

interface IFeedListProps {
  items: IFeedItem[] | undefined;
}

export const FeedList = ({ items }: IFeedListProps) => {
  return (
    <div className={styles.itemsWrapper}>
      {items?.map((item) => (
        <div key={item.messageId} className={styles.item}>
          <div className={styles.itemHeader}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.date}>{dayjs(item.date).format('DD.MM.YYYY HH:mm')}</span>
          </div>
          <span>{item.message}</span>
        </div>
      ))}
    </div>
  );
};
