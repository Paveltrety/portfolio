import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import { BouncingImage } from '../BouncingImage/BouncingImage';
import { FloatingImage } from '../FloatingImage/FloatingImage';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss';

interface ILayoutProps {
  isMainPage?: boolean;
}

export const Layout = ({ isMainPage, children }: PropsWithChildren<ILayoutProps>) => {
  return (
    <div className={styles.root}>
      {isMainPage && <BouncingImage />}
      <ToastContainer />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Header />
        </header>
        {isMainPage && <FloatingImage />}
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
