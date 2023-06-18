import React from "react";
import BootstrapProvider from "react-bootstrap/SSRProvider";
import { AppProps } from "next/app";
import { EventBusProvider } from "@/plugins/bus/EventBusProvider";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "@/assets/style.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <EventBusProvider>
      <BootstrapProvider>
        <Component {...pageProps} />
      </BootstrapProvider>
    </EventBusProvider>
  );
};

export default App;
