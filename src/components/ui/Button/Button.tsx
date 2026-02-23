import classNames from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
  variant?: 'blue' | 'black';
  className?: string;
}

export const Button = ({ text, className, variant = 'blue', type, onClick, isDisabled }: IButtonProps) => {
  return (
    <button className={classNames(styles.root, className, styles[variant])} type={type} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};
