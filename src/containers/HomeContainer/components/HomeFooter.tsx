import React from "react";
import { EventBusContext } from "@/plugins/bus/EventBusProvider";
import style from "./HomeFooter.module.scss";

const HomeFooter: React.FC = () => {
  const EventBus = React.useContext(EventBusContext);

  React.useEffect(() => {
    const cleanup = EventBus.on("click", (payload) => {
      console.log(payload);
    });

    return () => {
      cleanup();
    };
  }, []);

  return (
    <footer className={style.footer}>
      <div>Footer</div>
    </footer>
  );
};

export default HomeFooter;
