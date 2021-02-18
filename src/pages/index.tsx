import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Hero from 'components/hero';
import styles from '../styles/indexPage.module.scss';
import Persons from 'components/persons';
import MindMapForm from 'components/mindMapForm';

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

const BlogIndex = ({ data, location }: IndexPageProps) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Hero />
      <h3 className={styles.title}>Как работать с MindMap:</h3>
      <iframe
        src="https://player.vimeo.com/video/470292592?app_id=122963"
        width="1170"
        height="630"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="DIDDLY SQUAT"
      ></iframe>
      <Persons />
      <MindMapForm />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
