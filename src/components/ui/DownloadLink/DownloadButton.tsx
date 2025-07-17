import styles from './DownloadLink.module.scss';

interface IButtonProps {
  text: string;
  pathFile: string;
}

export const DownloadLink = ({ pathFile, text }: IButtonProps) => {
  return (
    <a href={pathFile} className={styles.root} download>
      <span>{text}</span>
    </a>
  );
};
