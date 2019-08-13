import React from "react";

import { HomeHero, HomeImageStrip, HomePhilos } from "../components/Home/";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Maple Ridge Daycare - Wilkinson Learning Tree" />
    <HomeHero />
    <HomeImageStrip />
    <HomePhilos />
  </Layout>
);

export default IndexPage;
