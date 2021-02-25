import React from 'react';
import Header from 'components/header';
import styles from './layout.module.scss';
import Footer from '../footer';
import 'react-multi-carousel/lib/styles.css';

const Layout = ({
  location,
  children,
}: {
  location: any;
  children: React.ReactNode;
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  // if (isRootPath) {
  const header = <Header />;
  // }

  return (
    <div className={styles.outerWrapper} data-is-root-path={isRootPath}>
      <div className={styles.innerWrapper}>
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
