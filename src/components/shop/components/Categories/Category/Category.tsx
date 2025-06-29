import classNames from 'classnames';
import styles from './Category.module.scss';

interface ICategoryProps {
  name: string;
  onClick: () => void;
  isActive?: boolean;
}

export const Category = ({ name, onClick, isActive }: ICategoryProps) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      {name}
    </div>
  );
};
