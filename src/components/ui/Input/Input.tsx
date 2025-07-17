import styles from './Input.module.scss';

interface IInputProps {
  name: string;
  label: string;
  value: string;
  onChange: () => void;
  placeholder?: string;
}

export const Input = ({ value, name, onChange, label, placeholder }: IInputProps) => {
  return (
    <div className={styles.root}>
      <label className={styles.label}>{label}</label>
      <input name={name} value={value} onChange={onChange} placeholder={placeholder} className={styles.input} />
    </div>
  );
};
