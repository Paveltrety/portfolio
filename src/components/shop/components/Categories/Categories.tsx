import { Category } from './Category/Category';

import styles from './Categories.module.scss';

export const Categories = () => {
  return (
    <div className={styles.root}>
      <Category isActive name="Футболка" onClick={() => {}} /> <Category name="Толстовка" onClick={() => {}} />
    </div>
  );
};
