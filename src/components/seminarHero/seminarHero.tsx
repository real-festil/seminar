import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'gatsby';

import styles from './seminarHero.module.scss';
import SeminarHeroImg from '../../../content/assets/seminar-hero.jpg';
import Button from 'components/button';

const features = [
  { id: 0, title: `4 часа`, label: `Практической, пошаговой информации` },
  { id: 1, title: `10 этапов`, label: `Практической, пошаговой информации` },
  { id: 2, title: `7 экспертов`, label: `Разрабатывали программу обучения` },
  { id: 3, title: `Ноябрь 2020`, label: `Самые актуальные знания` },
];

const SeminarHero = () => {
  return (
    <>
      <div className={styles.hero}>
        <MediaQuery maxDeviceWidth={768}>
          <img src={SeminarHeroImg} alt="hero" className={styles.heroImg} />
        </MediaQuery>
        <h2 className={styles.heroTitle}>
          Семинар по продвижению мобильных приложений в 2021 году
        </h2>
        <p className={styles.heroText}>
          Научитесь управлять процессом продвижения: от сбора команды до
          международной экспансии
        </p>
        <div className={styles.heroControl}>
          <Button
            onClick={() => console.log(`clicked`)}
            label={`Принять участие`}
          />
          <Link to="#" className={styles.heroControlLink}>
            Программа обучения &gt;
          </Link>
        </div>
        <div className={styles.heroDates}>
          <div className={styles.heroDatesBlock}>
            <p className={styles.heroDatesBlockLabel}>Дата</p>
            <p className={styles.heroDatesBlockDate}>3 ноября, 11:00 - 17:00</p>
          </div>
          <div className={styles.heroDatesBlock}>
            <p className={styles.heroDatesBlockLabel}>Место</p>
            <p className={styles.heroDatesBlockDate}>
              г. Москва, ул. Ленина 34к1
            </p>
          </div>
        </div>
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

export default SeminarHero;
