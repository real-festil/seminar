import React from 'react';
import { Link } from 'gatsby';
import Header from 'components/header';
import styles from './layout.module.scss';
import Footer from '../footer';

const Layout = ({
  location,
  title,
  children,
}: {
  location: any;
  title: string;
  children: React.ReactNode;
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = <Header />;
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

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
