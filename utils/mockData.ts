import { Question } from "@/types/types";

export const SAMPLE_QUESTIONS: Question[] = [
  {
    campaignId: "C001",
    themeId: "T001",
    questionId: "Q001",
    questionText: "КОЯ ПАРЛАМЕНТАРНА ПАРТИЯ ВИ ДОПАДА ПОВЕЧЕ?",
    options: [
      { id: "q1_opt1", text: "Партия 1" },
      { id: "q1_opt2", text: "Партия 2" },
      { id: "q1_opt3", text: "Партия 3" },
      { id: "q1_opt4", text: "Партия 4" },
      // { id: "q1_opt5", text: "Партия 5" },
      // { id: "q1_opt6", text: "Партия 6" },
      { id: "q1_opt7", text: "Никоя" },
      { id: "q1_opt8", text: "Друга" },
    ],
  },
  {
    campaignId: "C002",
    themeId: "T003",
    questionId: "Q004",
    questionText: "ЗА КОГО БИХТЕ ДАЛИ СВОЯТ ГЛАС?",
    options: [
      {
        id: "q4_opt1",
        imageUrl:
          "https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg",
      },
      {
        id: "q4_opt2",
        imageUrl:
          "https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg",
      },
      {
        id: "q4_opt3",
        imageUrl:
          "https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg",
      },
      {
        id: "q4_opt4",
        imageUrl:
          "https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg",
      },
      {
        id: "q4_opt5",
        imageUrl:
          "https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg",
      },
      {
        id: "q4_opt6",
        text: "ДРУГИ",
        localImageSource: require("../assets/images/other.png"),
      },
    ],
    hasImageOptions: true,
  },
  {
    campaignId: "C001",
    themeId: "T001",
    questionId: "Q002",
    questionText: "ОДОБРЯВАТЕ ЛИ РАБОТАТА НА КМЕТА?",
    options: [
      { id: "q2_opt1", text: "Да, напълно" },
      { id: "q2_opt2", text: "По-скоро да" },
      { id: "q2_opt3", text: "По-скоро не" },
      { id: "q2_opt4", text: "Не, изобщо" },
      { id: "q2_opt5", text: "Не мога да преценя" },
    ],
  },
  {
    campaignId: "C001",
    themeId: "T002",
    questionId: "Q003",
    questionText: "КАКВО Е НАЙ-ВАЖНОТО НЕЩО ЗА ВАШИЯ КВАРТАЛ?",
    options: [
      { id: "q3_opt1", text: "Чистота" },
      { id: "q3_opt2", text: "Сигурност" },
      { id: "q3_opt3", text: "Паркоместа" },
      { id: "q3_opt4", text: "Зелени площи" },
      { id: "q3_opt5", text: "Друго" },
    ],
  },
];
