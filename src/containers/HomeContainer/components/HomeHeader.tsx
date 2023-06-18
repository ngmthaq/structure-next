import React from "react";
import { EventBusContext } from "@/plugins/bus/EventBusProvider";
import AnchorLink from "@/components/AnchorLink";
import style from "./HomeHeader.module.scss";

const HomeHeader: React.FC = () => {
  const EventBus = React.useContext(EventBusContext);

  const onClick = () => {
    EventBus.emit("click", { hello: "world" });
  };

  return (
    <header className={style.header}>
      <div>Header</div>
      <AnchorLink path="/products">Products</AnchorLink>
      <button onClick={onClick}>Event Bus</button>
    </header>
  );
};

export default HomeHeader;
