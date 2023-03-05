export interface Question {
  question: string;
  hint: string;
  link: string;
  options: Options[];
}

export interface Options {
  text: string;
  value: number;
  operation: "plus" | "minus" | "none";
}
