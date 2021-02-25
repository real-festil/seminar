import React from 'react';
import styles from './hero.module.scss';
import MediaQuery from 'react-responsive';
import HomeHero from '../../../content/assets/home-hero.png';
import WebinarImg from '../../../content/assets/webinar.png';

import Button from 'components/button';

const features = [
  { id: 0, title: `10 этапов`, label: `Весь процесс от А до Я` },
  { id: 1, title: `85 шагов`, label: `Детальный план по каждому этапу` },
  { id: 2, title: `7 экспертов`, label: `Разрабатывали Mindmap` },
  { id: 3, title: `Ноябрь 2020`, label: `Самые актуальные знания` },
];

interface IHero {
  isWebinar?: boolean;
}

const Hero = ({ isWebinar = false }: IHero) => {
  return (
    <>
      <div className={styles.hero}>
        <MediaQuery maxDeviceWidth={768}>
          <img src={HomeHero} alt="hero" className={styles.heroImg} />
        </MediaQuery>
        {isWebinar && (
          <img src={WebinarImg} alt="webinar" className={styles.webinarImg} />
        )}
        <h2 className={styles.heroTitle}>
          {isWebinar
            ? `Разбор Mindmap карты по продвижению приложений в 2021 году`
            : `MindMap по продвижению мобильных приложений в 2021 году`}
        </h2>
        <p className={styles.heroText}>
          {isWebinar
            ? `Рекомендации по каждому этапу, главные ошибки и тренды в мобильном маркетинге`
            : `Получите пошаговый план развития  от лучших экспертов рынка`}
        </p>
        {isWebinar && (
          <div className={styles.heroDates}>
            <div className={styles.heroDatesBlock}>
              <p className={styles.heroDatesBlockLabel}>Дата</p>
              <p className={styles.heroDatesBlockDate}>7 ноября</p>
            </div>
            <div className={styles.heroDatesBlock}>
              <p className={styles.heroDatesBlockLabel}>Время</p>
              <p className={styles.heroDatesBlockDate}>19:00 по мск</p>
            </div>
          </div>
        )}
        <Button
          onClick={() => console.log(`clicked`)}
          label={isWebinar ? `Принять участие` : `Получить бесплатно`}
        />
      </div>
      <ul className={styles.list}>
        {features.map((feature) => (
          <li key={feature.id} className={styles.listItem}>
            <p className={styles.listItemTitle}>
              <span className={styles.listItemTitleBlue}>
                {feature.title.split(` `)[0] + ` `}
              </span>
              {feature.title
                .split(` `)
                .filter((word) => word !== feature.title.split(` `)[0])
                .join(` `)}
            </p>
            <p>{feature.label}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Hero;
