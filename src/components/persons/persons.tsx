import { useStaticQuery, graphql } from 'gatsby';
import React, { useState, useRef } from 'react';
import styles from './persons.module.scss';
import BackgroundImage from 'gatsby-background-image';
import Person from './person';
import Carousel, { DotProps } from 'react-multi-carousel';
import MediaQuery from 'react-responsive';
import './carousel.css';

const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const CustomDot = ({ onClick, ...rest }: DotProps) => {
  const { active } = rest;
  return (
    <div
      className={active ? styles.sliderDotActive : styles.sliderDot}
      onClick={() => onClick!()}
    />
  );
};

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
            <>
              <MediaQuery minDeviceWidth={768}>
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
              </MediaQuery>
            </>
          );
        })}
      </ul>
      <MediaQuery maxDeviceWidth={768}>
        <Carousel
          responsive={responsive}
          showDots
          arrows={false}
          centerMode
          infinite
          renderDotsOutside
          customDot={<CustomDot />}
        >
          {data.allStrapiAuthors.edges.map((el: any) => {
            const { Author } = el.node;

            return (
              <div key={el.node.id}>
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
              </div>
            );
          })}
        </Carousel>
      </MediaQuery>
    </section>
  );
};

export default Persons;
