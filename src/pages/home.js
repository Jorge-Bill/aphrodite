import React from "react";
import {
  Seo,
  Navigation,
  Content,
  InstaPosts,
  FakeContent,
  Footer,
} from "components";

import { Container, Header } from "rsuite";

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
      <Container>
        <Header>
          <Navigation title={process.env.REACT_APP_TITLE} />
        </Header>
        <Content>
          <FakeContent />
        </Content>
        <InstaPosts />
        <Footer />
      </Container>
    </>
  );
}

export default Home;
