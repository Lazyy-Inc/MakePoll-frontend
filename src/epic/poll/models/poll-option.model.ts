export class PollOptionModel {
  id: string;
  text: string;
  isSelected: boolean;

  constructor(id: string, text: string, isSelected: boolean = false) {
    this.id = id;
    this.text = text;
    this.isSelected = isSelected;
  }

  static mock1 = new PollOptionModel(
    "mock-id",
    "Blue"
  )

  static mock2 = new PollOptionModel(
    "mock-id-2",
    "Red"
  )

}