import { FC, Fragment, ReactNode } from "react";
import dynamic from "next/dynamic";
import style from "./NoSSR.module.scss";

const NoSSR: FC<NoSSRPropType> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });

export type NoSSRPropType = {
  children: ReactNode;
};
