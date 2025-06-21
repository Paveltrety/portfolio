import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
}

export const Button = ({ text, type, onClick, isDisabled }: IButtonProps) => {
  return (
    <button className={styles.root} type={type} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};
