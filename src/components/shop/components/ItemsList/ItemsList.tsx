import styles from './ItemsList.module.scss';
import { Item } from './components/Item/Item';

export const ItemsList = () => {
  return (
    <div className={styles.root}>
      <Item
        imageSrc="https://the-flow.ru/uploads/images/resize/600x0/adaptiveResize/12/99/68/74/72/d19b36140cd7.jpg"
        name="Футболка черная"
        id={'1'}
        price={111}
      />
    </div>
  );
};
