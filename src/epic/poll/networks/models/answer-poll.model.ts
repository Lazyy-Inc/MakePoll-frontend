export class AnswerPollModel {
  id: string;
  question: string;
  answeredAt: Date;

  constructor(id: string, question: string, answeredAt: Date) {
    this.id = id;
    this.question = question;
    this.answeredAt = answeredAt;
  }
}