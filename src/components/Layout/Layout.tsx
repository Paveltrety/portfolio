import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import { Routes } from '@/constants/routes';
import { usePathnameWithoutLocale } from '@/hooks/usePathnameWithoutLocale';

import { BouncingImage } from '../BouncingImage/BouncingImage';
import { FloatingImage } from '../FloatingImage/FloatingImage';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { LocaleSelect } from '../LocaleSelect/LocaleSelect';
import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathnameWithoutLocale();

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
        <LocaleSelect />
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
