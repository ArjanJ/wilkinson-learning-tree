import React from "react";

import { About } from "../components/About";
import { Form } from "../components/Form/";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO
      description="Read about Christine Wilkson and The Wilkinson Learning Tree in Maple Ridge, BC."
      title="About Us"
    />
    <About />
    <Form />
  </Layout>
);

export default AboutPage;
