import Link from 'next/link';
import Image from 'next/image';

import styles from './SocialLinks.module.scss';

export const SocialLinks = () => {
  return (
    <div className={styles.root}>
      <Link href={'mailto:pasha120598@gmail.com'} className={styles.link}>
        <Image src={'/icons/email.svg'} alt="email icon" fill />
      </Link>
      <Link href={'https://github.com/Paveltrety'} className={styles.link}>
        <Image src={'/icons/github.svg'} alt="github icon" fill />
      </Link>
      <Link href={'https://www.instagram.com/paveltrety'} className={styles.link}>
        <Image src={'/icons/instagram.svg'} alt="instagram icon" fill />
      </Link>
      <Link href={'https://t.me/paveltrety'} className={styles.link}>
        <Image src={'/icons/telegram.svg'} alt="telegram icon" fill />
      </Link>
    </div>
  );
};
