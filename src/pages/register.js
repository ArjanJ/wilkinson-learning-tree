import React from "react";

import { Form } from "../components/Form/";
import Layout from "../components/layout";
import { Register } from "../components/Register/";
import SEO from "../components/seo";

const RegisterPage = () => (
  <Layout>
    <SEO
      description="Register now at the Wilkinson Learning Tree Family Daycare in Maple Ridge, BC."
      title="Register Now"
    />
    <Register />
    <Form />
  </Layout>
);

export default RegisterPage;
