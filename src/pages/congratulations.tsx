import React from 'react';
import { graphql, PageProps } from 'gatsby';
import MediaQuery from 'react-responsive';

import Layout from '../components/layout/layout';
import WhatYouGet from 'components/whatYouGet';
import SEO from '../components/seo';
import Hero from 'components/hero';
import styles from '../styles/congratPage.module.scss';
import emailImg from '../../content/assets/email.png';
import Persons from 'components/persons';
import WebinarForm from 'components/webinarForm';

const Congratulations = ({ location }: PageProps) => {
  return (
    <Layout location={location}>
      <SEO title="Поздравляем" />
      <h3 className={styles.title}>Mindmap отправлен к вам на почту</h3>
      <img src={emailImg} alt="email" className={styles.image} />
      <p className={styles.subtitle}>
        Проверьте папку &ldquo;спам&ldquo; и &ldquo;промоакции&ldquo; если
        письмо не пришло в течении 5 минут
      </p>
      <MediaQuery maxDeviceWidth={768}>
        <iframe
          src="https://player.vimeo.com/video/470292592?app_id=122963"
          width="100%"
          height="300"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="DIDDLY SQUAT"
        ></iframe>
      </MediaQuery>
      <MediaQuery minDeviceWidth={768}>
        <iframe
          src="https://player.vimeo.com/video/470292592?app_id=122963"
          width="100%"
          height="630"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="DIDDLY SQUAT"
        ></iframe>
      </MediaQuery>
      <Hero isWebinar />
      <WhatYouGet />
      <Persons />
      <WebinarForm />
    </Layout>
  );
};

export default Congratulations;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
