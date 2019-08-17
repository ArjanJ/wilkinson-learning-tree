import React from "react";

import { Form } from "../components/Form/";
import {
  HomeAbout,
  HomeHero,
  HomeImageStrip,
  HomePhilosophy,
} from "../components/Home/";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO description="The Wilkinson Learning Tree is a family daycare in Maple Ridge specializing in care for children between 1 and 5 years old." />
    <HomeHero />
    <HomeImageStrip />
    <HomePhilosophy />
    <HomeAbout />
    <Form />
  </Layout>
);

export default IndexPage;
