import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { HomeContainerContext, HomeContainerProvider } from "./HomeContainer.context";
import style from "./HomeContainer.module.scss";

const HomeContainer: React.FC = () => {
  const {} = React.useContext(HomeContainerContext);

  return (
    <BaseLayout title="Create Next App" description="The most important thing is how the snippet looks." image="/favicon.ico">
      <HomeContainerProvider>
        <h1 className={style.heading}>Main</h1>
        <i className="bi bi-alarm-fill"></i>
      </HomeContainerProvider>
    </BaseLayout>
  );
};

export default HomeContainer;
