import { PropsWithChildren } from 'react';

import styles from './ShopLayout.module.scss';

import { Footer } from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { Header } from '../shop/components/Header/Header';

interface IShopLayoutProps {}

export const ShopLayout = ({ children }: PropsWithChildren<IShopLayoutProps>) => {
  return (
    <div className={styles.root}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
