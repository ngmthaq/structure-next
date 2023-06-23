import { FC, useContext, useEffect, useState } from "react";
import { EventBusContext } from "@/plugins/bus/EventBusProvider";
import { AppConst } from "@/constants/app.const";
import NotificationItem, { NotificationConfig } from "./components/NotificationItem";
import style from "./NotificationContainer.module.scss";

const NotificationContainer: FC<NotificationContainerPropType> = () => {
  const EventBus = useContext(EventBusContext);

  const [notifications, setNotification] = useState<NotificationConfig[]>([]);

  useEffect(() => {
    const cleanUp = EventBus.on(AppConst.eventBus.appendNotification, (notification: NotificationConfig) => {
      setNotification((state) => [...state, notification]);
    });

    return () => {
      cleanUp();
    };
  }, []);

  return (
    <div id={NOTIFICATION_CONTAINER_ID} className={style.container}>
      {notifications.map((notification, index) => (
        <NotificationItem key={index} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationContainer;

export const NOTIFICATION_CONTAINER_ID = "notification-container-id";

export type NotificationContainerPropType = {};
