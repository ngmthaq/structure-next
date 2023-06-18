import React from "react";
import Head from "next/head";

const BaseLayout: React.FC<BaseLayoutPropType> = ({ title, description, image, children }) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {title && (
          <React.Fragment>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
          </React.Fragment>
        )}

        {description && (
          <React.Fragment>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </React.Fragment>
        )}

        {image && (
          <React.Fragment>
            <meta name="image" content={image} />
            <meta property="og:image" content={image} />
          </React.Fragment>
        )}
      </Head>
      {children}
    </React.Fragment>
  );
};

export default BaseLayout;

export type BaseLayoutPropType = {
  title?: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
};
