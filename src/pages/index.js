import React from "react";

import {
  Partner,
  Balance,
  FromStarted,
  Card,
  Banner,
  Layout,
  Testimonials,
  Account,
  ShortText,
  Chooseme,
} from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
       <Partner />
      <Balance />
      <FromStarted />
     <Card />
       <Testimonials />
      <ShortText />
      <Account />
      <Chooseme /> 
    </Layout>
  );
};

export default IndexPage;
