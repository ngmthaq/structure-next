import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import BootstrapProvider from "react-bootstrap/SSRProvider";
import { AppProps } from "next/app";
import store from "@/store";
import { EventBusProvider } from "@/plugins/bus/EventBusProvider";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "@/assets/style.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ReduxProvider store={store}>
      <EventBusProvider>
        <BootstrapProvider>
          <Component {...pageProps} />
        </BootstrapProvider>
      </EventBusProvider>
    </ReduxProvider>
  );
};

export default App;
