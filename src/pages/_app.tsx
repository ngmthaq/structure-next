import React from "react";
import BootstrapProvider from "react-bootstrap/SSRProvider";
import { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "@/assets/style.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <BootstrapProvider>
      <Component {...pageProps} />
    </BootstrapProvider>
  );
};

export default App;
