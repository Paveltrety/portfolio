import { Categories } from '@/components/shop/components/Categories/Categories';
import { ItemsList } from '@/components/shop/components/ItemsList/ItemsList';

import styles from './ShopPage.module.scss';

const ShopPage = () => {
  return (
    <div className={styles.root}>
      <Categories />
      <ItemsList />
    </div>
  );
};

export default ShopPage;
