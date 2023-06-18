import React from "react";

export const HomeContainerContext = React.createContext<HomeContainerContextValue>({});

export const HomeContainerProvider: React.FC<HomeContainerProviderPropType> = ({ children }) => {
  const value: HomeContainerContextValue = {};

  return <HomeContainerContext.Provider value={value}>{children}</HomeContainerContext.Provider>;
};

export type HomeContainerProviderPropType = {
  children: React.ReactNode;
};

export type HomeContainerContextValue = {};
