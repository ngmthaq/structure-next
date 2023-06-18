import React from "react";
import dynamic from "next/dynamic";
import style from "./NoSSR.module.scss";

const NoSSR: React.FC<NoSSRPropType> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });

export type NoSSRPropType = {
  children: React.ReactNode;
};
