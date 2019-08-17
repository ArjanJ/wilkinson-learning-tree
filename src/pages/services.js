import React from "react";

import { Form } from "../components/Form/";
import Layout from "../components/layout";
import { ServicesHero } from "../components/Services/";
import SEO from "../components/seo";

const ServicesPage = () => (
  <Layout>
    <SEO
      description="The Wilkinson Learning Tree Family Daycare offers the best daycare in Maple Ridge, BC."
      title="Our Services"
    />
    <ServicesHero />
    <Form />
  </Layout>
);

export default ServicesPage;
