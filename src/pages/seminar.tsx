import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout/layout';
import WhatYouGet from 'components/whatYouGet';
import SEO from '../components/seo';
import SeminarHero from 'components/seminarHero';
import Persons from 'components/persons';
import WhatYouLearn from 'components/whatYouLearn';

const Seminar = ({ location }: PageProps) => {
  return (
    <Layout location={location}>
      <SEO title="Семинар" />

      <SeminarHero />
      <WhatYouGet title="Вы получите" />
      <WhatYouLearn />
      <Persons />
    </Layout>
  );
};

export default Seminar;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
