import { PollOptionModel } from "./poll-option.model";

export class PollModel {
  id: string;
  possibleAnswers: number;
  pollDuration: number;
  createdAt: Date;
  question: string;
  options: PollOptionModel[];

  constructor(
    id: string,
    possibleAnswers: number,
    pollDuration: number,   
    createdAt: Date,
    question: string,
    options: PollOptionModel[]
  ) {
    this.id = id;
    this.possibleAnswers = possibleAnswers;
    this.pollDuration = pollDuration;
    this.createdAt = createdAt;
    this.question = question;
    this.options = options;
  }

  static mock1 = new PollModel(
    "mock-poll-id",
    1,
    3600,
    new Date(),
    "What is your favorite color?",
    [
      PollOptionModel.mock1,
      PollOptionModel.mock2
    ]
  );
}