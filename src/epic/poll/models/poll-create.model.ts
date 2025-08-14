export interface PollCreateModel {
  question: string
  options: string[]
  possibleAnswers: number
  isCaptchaEnabled: boolean
  endDate: string
  areResultsHidden: boolean
}