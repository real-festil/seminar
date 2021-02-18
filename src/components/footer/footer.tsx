import { MailIcon, TelegramIcon, WhatsAppIcon } from 'icons';
import React from 'react';
import EgorImg from '../../../content/assets/egor.png';
import IvchenkoImg from '../../../content/assets/ivchenko.png';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <h3 className={styles.footerTitle}>Остались вопросы?</h3>
        <p className={styles.footerSubTitle}>Пишите, проконсультируем:</p>
        <img src={EgorImg} alt="Егор Карпов" className={styles.footerAvatar} />
        <p className={styles.footerName}>Егор Карпов</p>
        <p className={styles.footerPosition}>Со-автор и ведущий семинара</p>
        <div className={styles.footerContacts}>
          <div className={styles.footerContactsContact}>
            <TelegramIcon />
            <p className={styles.footerContactsContactText}>
              Telegram: @EgorKarpov
            </p>
          </div>
          <div className={styles.footerContactsContact}>
            <WhatsAppIcon />
            <p className={styles.footerContactsContactText}>
              WhatsApp: +79153444996
            </p>
          </div>
          <div className={styles.footerContactsContact}>
            <MailIcon />
            <p className={styles.footerContactsContactText}>
              Почта: itb.karpov@gmail.com
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav className={styles.footerNav}>
          <a href="#" className={styles.footerNavLink}>
            О семинаре
          </a>
          <a href="#" className={styles.footerNavLink}>
            Программа
          </a>
          <a href="#" className={styles.footerNavLink}>
            Авторы
          </a>
          <a href="#" className={styles.footerNavLink}>
            Отзывы
          </a>
        </nav>
        <div className={styles.footerNavWrapper}>
          <p className={styles.footerNavLink} style={{ margin: 0 }}>
            Дизайн сайта -
          </p>
          <img
            src={IvchenkoImg}
            alt="Ивченко"
            className={styles.footerNavImg}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
