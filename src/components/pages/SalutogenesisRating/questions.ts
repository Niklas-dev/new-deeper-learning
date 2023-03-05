import { Question } from "./types";

const questionStates: Array<Question> = [
  {
    question: "Do you get enough sleep?",
    hint: "7-8 hours is enough sleep",
    link: "https://www.youtube.com/watch?v=dQw4",
    options: [
      {
        text: "Yes I sleep enough.",
        value: 10,
        operation: "plus",
      },
      {
        text: "No I dont sleep enough.",
        value: 10,
        operation: "minus",
      },
      {
        text: "I sleep enough most of the time.",
        value: -5,
        operation: "minus",
      },
    ],
  },
  {
    question: "Do you work too much?",
    hint: "Placeholder text",
    link: "https://www.youtube.com/watch?v=dQw4",
    options: [
      {
        text: "Yes I work too much.",
        value: 10,
        operation: "minus",
      },
      {
        text: "I think its fine.",
        value: 0,
        operation: "none",
      },
      {
        text: "I dont work too much.",
        value: 10,
        operation: "plus",
      },
    ],
  },
];

export default questionStates;
