import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Hero from 'components/hero';
import styles from '../styles/indexPage.module.scss';
import Persons from 'components/persons';
import MindMapForm from 'components/mindMapForm';
import Modal from 'components/modal';
import { AcceptedModal } from 'components/modalsContent';
import MediaQuery from 'react-responsive';

interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMarkdownRemark: {
      nodes: any;
    };
  };
}

const Index = ({ location }: IndexPageProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Layout location={location}>
      <SEO title="MindMap" />
      <Hero />
      <h3 className={styles.title}>Как работать с MindMap:</h3>
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
      <Persons />
      <MindMapForm submitHandler={() => setIsModalVisible(true)} />
      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)}>
          <AcceptedModal onClose={() => setIsModalVisible(false)} />
        </Modal>
      )}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
