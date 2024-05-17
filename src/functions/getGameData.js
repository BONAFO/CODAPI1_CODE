export default function GetGameData (game) {
  switch (game) {
    case "bo2":
      return (() => import("@/media/bo2.json"))();
      case "bo2-attr":
        return (() => import("@/media/bo2_att.json"))();
    default:
      break;
  }
  return false;
}
