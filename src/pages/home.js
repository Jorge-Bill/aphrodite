import React from "react";
import { Seo, Navbar, Content, InstaPosts, FakeContent, Footer } from "components";

function Home() {
  const meta = {
    title: process.env.REACT_APP_TITLE || "",
    description: process.env.REACT_APP_DESCRIPTION || "",
    lang: process.env.REACT_APP_LANG || "",
    image: process.env.REACT_APP_IMAGE || "",
    author: process.env.REACT_APP_AUTHOR || "",
    siteUrl: process.env.REACT_APP_SITE_URL || "",
  };

  return (
    <>
      <Seo site={meta} />
      <Navbar title={process.env.REACT_APP_TITLE} />
      <Content>
        <FakeContent />
      </Content>
      <InstaPosts />
      <Footer />
    </>
  );
}

export default Home;
