import { FC, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import style from "./NotificationItem.module.scss";

const NotificationItem: FC<NotificationItemPropType> = ({ notification }) => {
  let timer: any;

  const [isShow, setIsShow] = useState<boolean>(true);

  const onClick = () => {
    if (notification.onClick && isShow) notification.onClick(notification.data, notification.message);
    setIsShow(false);
    clearTimeout(timer);
  };

  const onClose = (e?: any) => {
    if (e) e.stopPropagation();
    clearTimeout(timer);
    setIsShow(false);
    if (notification.onClose) notification.onClose(notification.data, notification.message);
  };

  useEffect(() => {
    timer = setTimeout(() => onClose(), NOTIFICATION_AUTO_CLOSE_AFTER);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Alert show={isShow} onClick={onClick} variant={notification.variant || "primary"} className={style.container}>
      <div className={style.message}>{notification.message}</div>
      <button onClick={onClose} className={style.button}>
        <i className="bi bi-x-lg"></i>
      </button>
    </Alert>
  );
};

export default NotificationItem;

export const NOTIFICATION_AUTO_CLOSE_AFTER = 5000; // ms

export type NotificationItemPropType = {
  notification: NotificationConfig;
};

export type NotificationVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type NotificationConfig = {
  message: string;
  data?: any;
  variant?: NotificationVariant;
  onClick?: (data: any, message: string) => void;
  onClose?: (data: any, message: string) => void;
};
