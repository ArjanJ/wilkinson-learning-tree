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
    <SEO />
    <HomeHero />
    <HomeImageStrip />
    <HomePhilosophy />
    <HomeAbout />
    <Form />
  </Layout>
);

export default IndexPage;
