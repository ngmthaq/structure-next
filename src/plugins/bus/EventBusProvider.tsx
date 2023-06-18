import React from "react";
import { EventBus } from "./EventBus";

export const eventBus = new EventBus({
  onError: (error: any) => {
    console.error("Event Bus got error", error);
  },
});

export const EventBusContext = React.createContext(eventBus);

export const EventBusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <EventBusContext.Provider value={eventBus}>{children}</EventBusContext.Provider>;
};
