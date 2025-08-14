
export class PollResultOption {
  text: string;
  votes: number;

  constructor(text: string, votes: number) {
    this.text = text;
    this.votes = votes;
  }

  static mock1 = new PollResultOption("Red", 5);
  static mock2 = new PollResultOption("Blue", 10);
}