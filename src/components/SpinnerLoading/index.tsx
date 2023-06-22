import React from "react";
import { Spinner } from "react-bootstrap";
import style from "./SpinnerLoading.module.scss";

const SpinnerLoading: React.FC<SpinnerLoadingPropType> = () => {
  return (
    <div className={style.wrapper} id={SPINNER_LOADING_ID}>
      <Spinner animation="border" role="status" />
    </div>
  );
};

export default SpinnerLoading;

export const SPINNER_LOADING_ID = "spinner-loading-id";

export type SpinnerLoadingPropType = {};
