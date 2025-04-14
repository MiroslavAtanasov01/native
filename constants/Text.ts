import { IconType } from "@/types/types";

export const ageRanges: string[] = ["18-24", "25-29", "30-34", "45-49"];
export const incomeRanges: string[] = [
  "1-1000",
  "1001-3000",
  "3001-5000",
  "над 5000",
];
export const genderOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "Мъж", value: "man" },
  { label: "Жена", value: "women" },
];
export const professionOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "Журналист", value: "journalist" },
  { label: "Доктор", value: "doctor" },
  { label: "Пожарникар", value: "firefighter" },
  { label: "Писател", value: "author" },
  { label: "Шофьор", value: "driver" },
];
export const interestsOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "Настолни игри", value: "boardGames" },
  { label: "Голф", value: "golf" },
  { label: "Рисуване", value: "drawing" },
  { label: "Танци", value: "dance" },
  { label: "Волейбол", value: "volleyball" },
  { label: "Четене", value: "reading" },
  { label: "Плуване", value: "swimming" },
];
export const countriesOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "България", value: "bg" },
  { label: "Русия", value: "ru" },
];
export const townOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "Варна", value: "varna" },
  { label: "София", value: "sofiq" },
  { label: "Пловдив", value: "plovdiv" },
  { label: "Бургас", value: "burgas" },
  { label: "Велико Търново", value: "velikoTurnovo" },
];
export const regionOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "Варна", value: "varna" },
  { label: "София", value: "sofiq" },
  { label: "Пловдив", value: "plovdiv" },
  { label: "Бургас", value: "burgas" },
  { label: "Велико Търново", value: "velikoTurnovo" },
];
export const districtOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "Владиславово", value: "vladislavovo" },
  { label: "Левски", value: "levski" },
  { label: "Чайка", value: "chaika" },
  { label: "Възраждане", value: "vuzrazhdane" },
  { label: "Обеля", value: "obelq" },
  { label: "Люлин", value: "lulin" },
  { label: "Младост", value: "mladost" },
  { label: "Дружба", value: "druzhba" },
];

export const icons: Record<IconType, any> = {
  heart: require("@/assets/images/heart.png"),
  questionMark: require("@/assets/images/question-mark.png"),
  arrow: require("@/assets/images/right-arrow.png"),
};
