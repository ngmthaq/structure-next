import { FC, useContext, useEffect } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { EventBusContext } from "@/plugins/bus/EventBusProvider";
import { HomeContainerContext, HomeContainerProvider } from "./HomeContainer.context";
import style from "./HomeContainer.module.scss";
import AnchorLink from "@/components/AnchorLink";
import { Element } from "@/helpers/element.helper";

const HomeContainer: FC<HomeContainerPropType> = ({ name }) => {
  const EventBus = useContext(EventBusContext);
  const {} = useContext(HomeContainerContext);

  const onAppendNotification = () => {
    Element.appendNotification({
      message: "Notification",
      variant: "primary",
      onClick: () => {
        console.log("On Click");
      },
      onClose: () => {
        console.log("On Close");
      },
    });
  };

  useEffect(() => {
    const cleanup = EventBus.on("click", (payload) => {
      console.log(payload);
    });

    return () => {
      cleanup();
    };
  }, []);

  return (
    <BaseLayout
      title="Create Next App"
      description="The most important thing is how the snippet looks."
      image="/favicon.ico"
    >
      <HomeContainerProvider>
        <h1 className={style.heading}>
          Helo {name} <i className="bi bi-alarm-fill"></i>
        </h1>
        <AnchorLink path="/products" loading>
          Products
        </AnchorLink>
        <button onClick={onAppendNotification}>Append Notification</button>
      </HomeContainerProvider>
    </BaseLayout>
  );
};

export default HomeContainer;

export type HomeContainerPropType = {
  name: string;
};
