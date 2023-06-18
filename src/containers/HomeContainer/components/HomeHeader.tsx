import React from "react";
import { EventBusContext } from "@/plugins/bus/EventBusProvider";
import style from "./HomeHeader.module.scss";

const HomeHeader: React.FC = () => {
  const EventBus = React.useContext(EventBusContext);

  const onClick = () => {
    EventBus.emit("click", { hello: "world" });
  };

  return (
    <header className={style.header}>
      <div>Header</div>
      <button onClick={onClick}>EventBus</button>
    </header>
  );
};

export default HomeHeader;
