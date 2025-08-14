import { PollOptionModel } from "./poll-option.model";

export class PollModel {
  id: string;
  possibleAnswers: number;
  pollDuration: number;
  createdAt: Date;
  question: string;
  totalVotes: number;
  options: PollOptionModel[];

  constructor(
    id: string,
    possibleAnswers: number,
    pollDuration: number,   
    createdAt: Date,
    question: string,
    totalVotes: number,
    options: PollOptionModel[]
  ) {
    this.id = id;
    this.possibleAnswers = possibleAnswers;
    this.pollDuration = pollDuration;
    this.createdAt = createdAt;
    this.question = question;
    this.totalVotes = totalVotes;
    this.options = options;
  }
}