import { PropsWithChildren } from 'react';
import { Header } from '../Header/Header';

import styles from './Layout.module.scss';

import { BouncingImage } from '../BouncingImage/BouncingImage';
import { Footer } from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { FloatingImage } from '../FloatingImage/FloatingImage';

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
        {isMainPage && (
          <div>
            <FloatingImage />
          </div>
        )}
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
