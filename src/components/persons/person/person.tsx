import Img from 'gatsby-image';
import React from 'react';
import styles from './person.module.scss';

const Person = ({ person }: { person: any }) => {
  return (
    <div className={styles.person}>
      <Img
        fixed={person.picture.imageFile.childImageSharp.fixed}
        className={styles.personImage}
      />
      <div className={styles.personInfo}>
        <p className={styles.personInfoTitle}>{person.fullName}</p>
        <p className={styles.personInfoText}>{person.position}</p>
        <ul className={styles.personInfoList}>
          {person.feature.map((feature: any) => (
            <li className={styles.personInfoListItem} key={feature.id}>
              {feature.feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Person;
