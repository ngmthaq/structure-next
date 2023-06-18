export class EventBus {
  protected configs?: TBusConfigs;
  protected bus: TBus;

  public constructor(configs?: TBusConfigs) {
    this.configs = configs;
    this.bus = {};
  }

  public on: TEventBus["on"] = (key, handler) => {
    if (this.bus[key] === undefined) this.bus[key] = [];
    this.bus[key]?.push(handler);
    return () => this.off(key, handler);
  };

  public off: TEventBus["off"] = (key, handler) => {
    const index = this.bus[key]?.indexOf(handler) ?? -1;
    this.bus[key]?.splice(index >>> 0, 1);
  };

  public once: TEventBus["once"] = (key, handler) => {
    const handle = (payload: Parameters<typeof handler>) => {
      handler(payload);
      this.off(key, handle as typeof handler);
    };
    this.on(key, handle as typeof handler);
  };

  public emit: TEventBus["emit"] = (key, payload) => {
    this.bus[key]?.forEach((callback) => {
      try {
        callback(payload);
      } catch (e: any) {
        this.configs?.onError(e);
      }
    });
  };
}

export type TEventHandler = (payload: any) => void;

export type TBus = Record<string, TEventHandler[]>;

export type TBusConfigs = {
  onError: (...params: any[]) => void;
};

export type TEventBus = {
  on(key: string, handler: TEventHandler): () => void;
  off(key: string, handler: TEventHandler): void;
  emit<P>(key: string, payload: P): void;
  once(key: string, handler: TEventHandler): void;
};
