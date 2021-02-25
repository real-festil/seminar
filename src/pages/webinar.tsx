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

const Webinar = ({ location }: PageProps) => {
  return (
    <Layout location={location}>
      <SEO title="Вебинар" />

      <Hero isWebinar />
      <WhatYouGet />
      <Persons />
      <WebinarForm />
    </Layout>
  );
};

export default Webinar;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
