import classNames from 'classnames';

import { DownloadLink } from '@/components/ui/DownloadLink/DownloadButton';

import { RESUMES_LIST } from './resumesList.data';
import styles from './ResumesList.module.scss';
import { useLocaleFromQuery } from '@/hooks/useLocaleFromQuery';

interface IResumesListProps {
  className: string;
}

export const ResumesList = ({ className }: IResumesListProps) => {
  const locale = useLocaleFromQuery();

  if (!locale) {
    return null;
  }

  return (
    <div className={classNames(styles.root, className)}>
      {RESUMES_LIST.map(({ pathFile, name, id }) =>
        pathFile[locale] ? <DownloadLink key={id} pathFile={pathFile[locale]} text={name} /> : null,
      )}
    </div>
  );
};
