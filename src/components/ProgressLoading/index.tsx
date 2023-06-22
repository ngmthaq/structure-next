import { FC, useContext, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { EventBusContext } from "@/plugins/bus/EventBusProvider";
import style from "./ProgressLoading.module.scss";
import { AppConst } from "@/constants/app.const";

const ProgressLoading: FC<ProgressLoadingPropType> = () => {
  const EventBus = useContext(EventBusContext);

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let el = document.getElementById(PROGRESS_LOADING_ID);
    let interval: any = null;
    const cleanup = EventBus.on(AppConst.eventBus.openProgressLoading, (isOpen: boolean) => {
      if (isOpen) {
        if (el) el.style.display = "block";
        setProgress(0);
        let number = progress;
        interval = setInterval(() => {
          if (number < 99) {
            number += 1;
            setProgress(number);
          }
        }, 5);
      } else {
        if (el) el.style.display = "none";
        clearInterval(interval);
        setProgress(0);
      }
    });

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className={style.wrapper} id={PROGRESS_LOADING_ID}>
      <ProgressBar animated striped variant="primary" className={style.loading} now={progress} min={0} max={100} />
    </div>
  );
};

export default ProgressLoading;

export const PROGRESS_LOADING_ID = "progress-loading-id";

export type ProgressLoadingPropType = {};
