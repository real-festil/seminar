import React from 'react';
import styles from './hero.module.scss';

import Button from 'components/button';

const features = [
  { id: 0, title: `10 этапов`, label: `Весь процесс от А до Я` },
  { id: 1, title: `85 шагов`, label: `Детальный план по каждому этапу` },
  { id: 2, title: `7 экспертов`, label: `Разрабатывали Mindmap` },
  { id: 3, title: `Ноябрь 2020`, label: `Самые актуальные знания` },
];

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <h2 className={styles.heroTitle}>
          MindMap по продвижению мобильных приложений в 2021 году
        </h2>
        <p className={styles.heroText}>
          Получите пошаговый план развития <br /> от лучших экспертов рынка.
        </p>
        <Button
          onClick={() => console.log(`clicked`)}
          label="Получить бесплатно"
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
