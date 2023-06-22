import { FC, ReactNode, createContext } from "react";

export const HomeContainerContext = createContext<HomeContainerContextValue>({});

export const HomeContainerProvider: FC<HomeContainerProviderPropType> = ({ children }) => {
  const value: HomeContainerContextValue = {};

  return <HomeContainerContext.Provider value={value}>{children}</HomeContainerContext.Provider>;
};

export type HomeContainerProviderPropType = {
  children: ReactNode;
};

export type HomeContainerContextValue = {};
