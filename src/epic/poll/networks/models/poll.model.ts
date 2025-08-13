import type { QuestionPollModel } from "./question-poll.model";

export class PollModel {
  uuid: string;
  possibleAnswers: number;
  pollDuration: number;
  hideResults: boolean;
  createdAt: Date;
  questions: QuestionPollModel[];

  constructor(
    uuid: string,
    possibleAnswers: number,
    pollDuration: number,
    hideResults: boolean,
    createdAt: Date,
    questions: QuestionPollModel[]
  ) {
    this.uuid = uuid;
    this.possibleAnswers = possibleAnswers;
    this.pollDuration = pollDuration;
    this.hideResults = hideResults;
    this.createdAt = createdAt;
    this.questions = questions;
  }
}