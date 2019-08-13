import React from "react";

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
    <SEO title="Maple Ridge Daycare - Wilkinson Learning Tree" />
    <HomeHero />
    <HomeImageStrip />
    <HomePhilosophy />
    <HomeAbout />
  </Layout>
);

export default IndexPage;
