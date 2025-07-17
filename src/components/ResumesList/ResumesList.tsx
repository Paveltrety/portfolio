import { DownloadLink } from '@/components/ui/DownloadLink/DownloadButton';
import { RESUMES_LIST } from './resumesList.data';

import styles from './ResumesList.module.scss';
import classNames from 'classnames';

interface IResumesListProps {
  className: string;
}
export const ResumesList = ({ className }: IResumesListProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      {RESUMES_LIST.map(({ pathFile, name }) => (
        <DownloadLink key={pathFile} pathFile={pathFile} text={name} />
      ))}
    </div>
  );
};
