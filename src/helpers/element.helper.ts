import { SPINNER_LOADING_ID } from "@/components/SpinnerLoading";

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
}
