export class PollOptionModel {
  id: string;
  text: string;
  isSelected: boolean;
  votes: number;

  constructor(id: string, text: string, isSelected: boolean = false, votes: number) {
    this.id = id;
    this.text = text;
    this.isSelected = isSelected;
    this.votes = votes;
  }

}