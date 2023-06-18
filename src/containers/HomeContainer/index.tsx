import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import style from "./HomeContainer.module.scss";
import { HomeContainerProvider } from "./HomeContainer.context";

const HomeContainer: React.FC = () => {
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
