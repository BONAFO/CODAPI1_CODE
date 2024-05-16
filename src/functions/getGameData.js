export default function GetGameData (game) {
  switch (game) {
    case "bo2":
      return (() => import("@/media/bo2.json"))();

    default:
      break;
  }
  return false;
}
