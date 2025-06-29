import { PropsWithChildren } from 'react';
import { Header } from '../Header/Header';

import styles from './DefaultLayout.module.scss';

import { BouncingImage } from '../BouncingImage/BouncingImage';
import { Footer } from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { FloatingImage } from '../FloatingImage/FloatingImage';
import { usePathname } from 'next/navigation';
import { Routes } from '@/constants/routes';

interface IDefaultLayoutProps {}

export const DefaultLayout = ({ children }: PropsWithChildren<IDefaultLayoutProps>) => {
  const pathname = usePathname();

  const isMainPage = pathname === Routes.main;
  return (
    <div className={styles.root}>
      {isMainPage && <BouncingImage />}
      <ToastContainer />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Header />
        </header>
        {isMainPage && <FloatingImage />}
        <main className={styles.content}>
          <div className={styles.card}>{children}</div>
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
