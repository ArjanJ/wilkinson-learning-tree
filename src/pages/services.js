import React from "react";

import { Form } from "../components/Form/";
import Layout from "../components/layout";
import { ServicesHero } from "../components/Services/";
import SEO from "../components/seo";

const ServicesPage = () => (
  <Layout>
    <SEO title="Our Services" />
    <ServicesHero />
    <Form />
  </Layout>
);

export default ServicesPage;
