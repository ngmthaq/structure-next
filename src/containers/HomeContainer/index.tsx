import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { EventBusContext } from "@/plugins/bus/EventBusProvider";
import { HomeContainerContext, HomeContainerProvider } from "./HomeContainer.context";
import style from "./HomeContainer.module.scss";
import HomeHeader from "./components/HomeHeader";

const HomeContainer: React.FC = () => {
  const EventBus = React.useContext(EventBusContext);
  const {} = React.useContext(HomeContainerContext);

  React.useEffect(() => {
    const cleanup = EventBus.on("click", (payload) => {
      console.log(payload);
    });

    return () => {
      cleanup();
    };
  }, []);

  return (
    <BaseLayout title="Create Next App" description="The most important thing is how the snippet looks." image="/favicon.ico">
      <HomeContainerProvider>
        <HomeHeader />
        <h1 className={style.heading}>Main</h1>
        <i className="bi bi-alarm-fill"></i>
      </HomeContainerProvider>
    </BaseLayout>
  );
};

export default HomeContainer;
