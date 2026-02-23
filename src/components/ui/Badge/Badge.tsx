import classNames from 'classnames';

import styles from './Badge.module.scss';

interface IBadgeProps {
  text: string;
  className?: string;
}

export const Badge = ({ text, className }: IBadgeProps) => {
  return <div className={classNames(styles.root, className)}>{text}</div>;
};
