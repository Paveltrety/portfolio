import styles from './Footer.module.scss';

import { SocialLinks } from '../SocialLinks/SocialLinks';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <SocialLinks />
    </div>
  );
};
