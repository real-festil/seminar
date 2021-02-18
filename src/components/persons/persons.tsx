import { useStaticQuery, graphql } from 'gatsby';
import React, { useState, useRef } from 'react';
import styles from './persons.module.scss';
import BackgroundImage from 'gatsby-background-image';
import Person from './person';

const Persons = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiAuthors {
        edges {
          node {
            id
            Author {
              fullName
              feature {
                feature
                id
              }
              id
              position
              picture {
                url
                imageFile {
                  childImageSharp {
                    fixed(width: 340, height: 375) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const [selectedPerson, setSelectedPerson] = useState(
    data.allStrapiAuthors.edges[0].node.id,
  );

  const ref = useRef(null) as React.RefObject<HTMLDivElement> | null;

  const onPersonSelect = (id: string) => {
    setSelectedPerson(id);
    if (ref) {
      if (ref.current)
        window.scrollTo({
          top: ref.current.offsetTop - 100,
          behavior: `smooth`,
        });
    }
  };

  return (
    <section className={styles.persons} ref={ref}>
      <h2 className={styles.personsTitle}>Авторы MindMap&#39;a</h2>
      {console.log(data.allStrapiAuthors.edges)}
      <Person
        person={
          data.allStrapiAuthors.edges.find(
            (el: any) => el.node.id === selectedPerson,
          ).node.Author
        }
      />
      <ul className={styles.personsList}>
        {data.allStrapiAuthors.edges.map((el: any) => {
          const { Author } = el.node;

          return (
            <li key={el.node.id}>
              <BackgroundImage
                fixed={Author.picture.imageFile.childImageSharp.fixed}
                className={styles.personsListItem}
                onClick={() => onPersonSelect(el.node.id)}
              >
                <div className={styles.personsListItemTextWrapper}>
                  <p className={styles.personsListItemTitle}>
                    {Author.fullName}
                  </p>
                  <p className={styles.personsListItemSubtitle}>
                    {Author.position}
                  </p>
                </div>
              </BackgroundImage>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Persons;
