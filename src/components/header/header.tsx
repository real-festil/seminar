import { Link } from 'gatsby';
import React from 'react';
import LogoImg from '../../../content/assets/logo.png';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img src={LogoImg} alt="logo" className={styles.wrapperLogo} />
      </Link>
    </div>
  );
};

export default Header;
