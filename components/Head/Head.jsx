import NextHead from "next/head";
import React from "react";

const Head = () => {
  return (
    <NextHead>
      <title>NL Label - студия звукозаписи, музыкальный лейбл в Минске</title>
      <meta
        key="title"
        property="og:title"
        content="NL Label - студия звукозаписи, музыкальный лейбл в Минске"
      />
      <meta name="description" content="NL Label - лейбл в минске" />
      <meta name="robots" content="index, follow" />
    </NextHead>
  );
};

export default Head;
