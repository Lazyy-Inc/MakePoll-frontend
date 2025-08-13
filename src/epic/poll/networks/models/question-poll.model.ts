import type { AnswerPollModel } from "./answer-poll.model";

export class QuestionPollModel {
  uuid: string;
  text: string;
  nbAnswers: number;
  poll: string;
  answers: AnswerPollModel[];

  constructor(uuid: string, text: string, nbAnswers: number, poll: string, answers: AnswerPollModel[]) {
    this.uuid = uuid;
    this.text = text;
    this.nbAnswers = nbAnswers;
    this.poll = poll;
    this.answers = answers;
  }
}