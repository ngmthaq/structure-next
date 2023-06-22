import { FC, Fragment, ReactNode } from "react";
import Head from "next/head";

const BaseLayout: FC<BaseLayoutPropType> = ({ title, description, image, children }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {title && (
          <Fragment>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
          </Fragment>
        )}

        {description && (
          <Fragment>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </Fragment>
        )}

        {image && (
          <Fragment>
            <meta name="image" content={image} />
            <meta property="og:image" content={image} />
          </Fragment>
        )}
      </Head>
      {children}
    </Fragment>
  );
};

export default BaseLayout;

export type BaseLayoutPropType = {
  title?: string;
  description?: string;
  image?: string;
  children: ReactNode;
};
