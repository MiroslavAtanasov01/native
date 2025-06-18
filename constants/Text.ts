import { IconType } from "@/types/types";

export const ageRanges: Array<{ label: string; value: string }> = [
  { label: "18-24", value: "From18to24" },
  { label: "25-29", value: "From25to29" },
  { label: "30-44", value: "From30to44" },
  { label: "45-49", value: "Over45" },
];

export const ageRangesValues = {
  From18to24: "18-24",
  From25to29: "25-29",
  From30to34: "30-44",
  Over45: "45-49",
};
export const incomeRanges: Array<{ label: string; value: string }> = [
  { label: "1-1000", value: "From1to1000" },
  { label: "1001-3000", value: "From1001to3000" },
  { label: "3001-5000", value: "From3001to5000" },
  { label: "Над 5000", value: "Over5001" },
];
export const incomeRangesValues = {
  From1to1000: "1-1000",
  From1001to3000: "1001-3000",
  From3001to5000: "3001-5000",
  Over5001: "Над 5000",
};

export const genderOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "Мъж", value: "Male" },
  { label: "Жена", value: "Female" },
  { label: "Друго", value: "Other" },
];
export const genderOptionsValues = {
  "": "",
  Male: "Мъж",
  Female: "Жена",
  Other: "Друго",
};

export const professionOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "Учител", value: "Teacher" },
  { label: "Студент", value: "Student" },
  { label: "Лекар", value: "DoctorPhysician" },
  { label: "Медицинска сестра", value: "Nurse" },
  { label: "Инженер", value: "Engineer" },
  { label: "Адвокат", value: "Lawyer" },
  { label: "Полицай", value: "PoliceOfficer" },
  { label: "Пожарникар", value: "Firefighter" },
  { label: "Военнослужещ", value: "MilitaryPersonnel" },
  { label: "Държавен служител", value: "GovernmentEmployee" },
  { label: "Собственик на бизнес", value: "BusinessOwner" },
  { label: "Офис служител", value: "OfficeWorker" },
  { label: "Ръчен работник", value: "ManualLaborer" },
  { label: "Строителен работник", value: "ConstructionWorker" },
  { label: "Фермер", value: "Farmer" },
  { label: "Учeн / изследовател", value: "ScientistResearcher" },
  { label: "Артист / дизайнер", value: "ArtistDesigner" },
  { label: "Писател / журналист", value: "WriterJournalist" },
  { label: "IT специалист / програмист", value: "ITSpecialistProgrammer" },
  { label: "Безработен", value: "Unemployed" },
  { label: "Пенсионер", value: "Retired" },
  { label: "Самонает", value: "SelfEmployed" },
  { label: "Родител, който остава вкъщи", value: "StayAtHomeParent" },
  { label: "Служител в обслужваща сфера", value: "ServiceWorker" },
  { label: "Друг", value: "Other" },
];

export const professionOptionsValues = {
  "": "",
  Teacher: "Учител",
  Student: "Студент",
  DoctorPhysician: "Лекар",
  Nurse: "Медицинска сестра",
  Engineer: "Инженер",
  Lawyer: "Адвокат",
  PoliceOfficer: "Полицай",
  Firefighter: "Пожарникар",
  MilitaryPersonnel: "Военнослужещ",
  GovernmentEmployee: "Държавен служител",
  BusinessOwner: "Собственик на бизнес",
  OfficeWorker: "Офис служител",
  ManualLaborer: "Ръчен работник",
  ConstructionWorker: "Строителен работник",
  Farmer: "Фермер",
  ScientistResearcher: "Учeн / изследовател",
  ArtistDesigner: "Артист / дизайнер",
  WriterJournalist: "Писател / журналист",
  ITSpecialistProgrammer: "IT специалист / програмист",
  Unemployed: "Безработен",
  Retired: "Пенсионер",
  SelfEmployed: "Самонает",
  StayAtHomeParent: "Родител, който остава вкъщи",
  ServiceWorker: "Служител в обслужваща сфера",
  Other: "Друг",
};

export const beliefsOptions: Array<{ label: string; value: string }> = [
  { label: "", value: "" },
  { label: "Консерватор", value: "Conservative" },
  { label: "Либерал", value: "Liberal" },
  { label: "Социалист", value: "Socialist" },
  { label: "Либертарианец", value: "Libertarian" },
  { label: "Центрист/Умерен", value: "CentristModerate" },
  { label: "Националист", value: "Nationalist" },
  { label: "Еколог/Зелен", value: "EnvironmentalistGreen" },
  { label: "Прогресивист", value: "Progressive" },
  { label: "Популист", value: "Populist" },
  { label: "Комунист", value: "Communist" },
  { label: "Анархист", value: "Anarchist" },
  { label: "Религиозен/Традиционалист", value: "ReligiousTraditionalist" },
  { label: "Секуларист", value: "Secularist" },
  { label: "Глобалист", value: "Globalist" },
  { label: "Антиглобалист", value: "AntiGlobalist" },
  { label: "Феминист", value: "Feminist" },
  { label: "Антисистемен", value: "AntiEstablishment" },
  {
    label: "Аполитичен/Не се интересува от политика",
    value: "ApoliticalNotInterestedInPolitics",
  },
  { label: "Друго", value: "Other" },
];
export const beliefsOptionsValues = {
  "": "",
  Conservative: "Консерватор",
  Liberal: "Либерал",
  Socialist: "Социалист",
  Libertarian: "Либертарианец",
  CentristModerate: "Центрист/Умерен",
  Nationalist: "Националист",
  EnvironmentalistGreen: "Еколог/Зелен",
  Progressive: "Прогресивист",
  Populist: "Популист",
  Communist: "Комунист",
  Anarchist: "Анархист",
  ReligiousTraditionalist: "Религиозен/Традиционалист",
  Secularist: "Секуларист",
  Globalist: "Глобалист",
  AntiGlobalist: "Антиглобалист",
  Feminist: "Феминист",
  AntiEstablishment: "Антисистемен",
  ApoliticalNotInterestedInPolitics: "Аполитичен/Не се интересува от политика",
  Other: "Друго",
};
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
