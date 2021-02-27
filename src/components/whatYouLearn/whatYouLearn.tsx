import React from 'react';
import Button from '../button';
import styles from './whatYouLearn.module.scss';

const learnList = [
  {
    id: 1,
    title: `Формировать продукт который нужен рынку`,
    label: `Управлять продуктовой аналитикой, проводить конкурентный анализ и пользовательские опросы.`,
  },
  {
    id: 2,
    title: `Повышать прибыль и удобство использования`,
    label: `Настраивать монетизацию, UI/UX и Push-уведомления.`,
  },
  {
    id: 3,
    title: `Визуально оформлять проект`,
    label: `Управлять разработкой фирменнго стиля, названия, иконки и сайта.`,
  },
  {
    id: 4,
    title: `Создавать стратегию продвижения`,
    label: `Определять иснтрументы продвижения, планировать бюджет.`,
  },
  {
    id: 5,
    title: `Настраивать аналитику`,
    label: `Следить за ключевыми метриками и конкурентами. Управлять рекламной и внутренней аналитикой.`,
  },
  {
    id: 6,
    title: `Проводить ASO в App Store и Google Play`,
    label: `Оформлять страницу в приложения и продвигаться по поисковым запросам`,
  },
  {
    id: 7,
    title: `Продвигаться через медиа-инструменты`,
    label: `Разберетесь как работать со СМИ и блогерами.`,
  },
  {
    id: 8,
    title: `Продвигаться через рекламные сети`,
    label: `Управлять продвижением в Facebook Ads, My.Target, Google UAC, ASA, TikTok.`,
  },
  {
    id: 9,
    title: `Выводить проект на новые рынки `,
    label: `Проводить локализацию, готовить и реализовывать план по экспансии`,
  },
  {
    id: 10,
    title: `Работать с базой пользователей`,
    label: `Управлять продвижением в Facebook Ads, My.Target, Google UAC, ASA, TikTok.`,
  },
];

const WhatYouLearn = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Вы научитесь</h3>
      <div className={styles.learnList}>
        {learnList.map((item) => (
          <div key={item.id} className={styles.learnListItem}>
            <h5 className={styles.learnListItemTitle}>{item.id}</h5>
            <p className={styles.learnListItemBold}>{item.title}</p>
            <p className={styles.learnListItemText}>{item.label}</p>
          </div>
        ))}
      </div>
      <div className={styles.getBlock}>
        <h4 className={styles.getBlockTitle}>Главное, вы получите:</h4>
        <div className={styles.getBlockItems}>
          <div className={styles.getBlockItem}>
            <p className={styles.getBlockItemText}>
              Список проверенных подрядчиков на каждый этап продвижения
            </p>
          </div>
          <div className={styles.getBlockItem}>
            <p className={styles.getBlockItemText}>
              Инструкции по сбору и управлению маркетинговой командой
            </p>
          </div>
        </div>
        <Button label="Принять участие" onClick={() => {}} />
      </div>
    </section>
  );
};

export default WhatYouLearn;
