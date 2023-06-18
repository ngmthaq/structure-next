import Luxon from "luxon";

export class Datetime {
  public static getCurrentUTCMilliseconds() {
    return Luxon.DateTime.now().toUTC().toMillis();
  }
}
