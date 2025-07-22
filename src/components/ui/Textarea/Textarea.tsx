import styles from './Textarea.module.scss';

interface ITextareaProps {
  maxLength: number;
  name?: string;
  label?: string;
  value: string;
  rows?: number;
  onChange: () => void;
  placeholder?: string;
  error?: string;
}

export const Textarea = ({ value, error, maxLength, name, label, rows = 4, onChange, placeholder }: ITextareaProps) => {
  return (
    <div className={styles.root}>
      <label className={styles.label}>{label}</label>
      <textarea
        rows={rows}
        maxLength={maxLength}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.textarea}
      />
      <div className={styles.subContent}>
        {error && <span className={styles.error}>{error}</span>}
        <span className={styles.counter}>
          {value.length}/{maxLength} символов
        </span>
      </div>
    </div>
  );
};
