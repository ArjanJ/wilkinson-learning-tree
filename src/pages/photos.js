import React from "react";

import { Form } from "../components/Form/";
import Layout from "../components/layout";
import { Photos } from "../components/Photos/";
import SEO from "../components/seo";

const PhotosPage = () => (
  <Layout>
    <SEO
      description="Photos of the Wilkinson Learning Tree Family Daycare in Maple Ridge, BC."
      title="Photos"
    />
    <Photos />
    <Form />
  </Layout>
);

export default PhotosPage;
