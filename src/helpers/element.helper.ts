import { AppConst } from "@/constants/app.const";
import { eventBus } from "@/plugins/bus/EventBusProvider";
import { SPINNER_LOADING_ID } from "@/components/SpinnerLoading";
import { NotificationConfig } from "@/components/NotificationContainer/components/NotificationItem";

export class Element {
  public static openSpinnerLoading() {
    const element = document.getElementById(SPINNER_LOADING_ID);
    if (element) {
      element.style.display = "flex";
    }
  }

  public static closeSpinnerLoading() {
    const element = document.getElementById(SPINNER_LOADING_ID);
    if (element) {
      element.style.display = "none";
    }
  }

  public static openProgressLoading() {
    eventBus.emit<boolean>(AppConst.eventBus.openProgressLoading, true);
  }

  public static closeProgressLoading() {
    eventBus.emit<boolean>(AppConst.eventBus.openProgressLoading, false);
  }

  public static appendNotification(notification: NotificationConfig) {
    eventBus.emit<NotificationConfig>(AppConst.eventBus.appendNotification, notification);
  }
}
