import React from 'react';

import {
  PlanIcon,
  PRIcon,
  QAIcon,
  RecommendationIcon,
  TrendsIcon,
} from './svgs';
import styles from './get.module.scss';
import Button from '../button';

const features = [
  {
    id: 0,
    label: `План по развитию и продвижению приложения в 2021 году`,
    img: <PlanIcon />,
  },
  {
    id: 1,
    label: `Практические рекомендации по каждому этапу`,
    img: <RecommendationIcon />,
  },
  {
    id: 2,
    label: `Разбор последних трендов в мобильном маркетинге`,
    img: <TrendsIcon />,
  },
  {
    id: 3,
    label: `Рекомендации по эффективному использованию рекламного бюджета`,
    img: <PRIcon />,
  },
  {
    id: 4,
    label: `Ответы на интересующие вопросы`,
    img: <QAIcon />,
  },
];

interface IWhatYouGet {
  title?: string;
}

const WhatYouGet = ({ title }: IWhatYouGet) => {
  return (
    <section className={styles.get}>
      <h3 className={styles.getTitle}>
        {title ? title : `На вебинаре вы получите:`}
      </h3>
      {features.map((feat, index) => (
        <div key={feat.id} className={styles.getBlock}>
          <div className={styles.getBlockIcon}>{feat.img}</div>
          <p className={styles.getBlockText}>{feat.label}</p>
          <div className={styles.getBlockIndex}>{`0` + ++index}</div>
        </div>
      ))}
      <Button label="Принять участие" onClick={() => {}} />
    </section>
  );
};

export default WhatYouGet;
