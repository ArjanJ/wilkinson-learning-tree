import React from "react";

import { About } from "../components/About";
import { Form } from "../components/Form/";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <About />
    <Form />
  </Layout>
);

export default AboutPage;
