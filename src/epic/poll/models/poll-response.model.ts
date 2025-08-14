import type { PollModel } from "./poll.model";

export interface PollResponseModel {
  poll: PollModel,
  token: string
}