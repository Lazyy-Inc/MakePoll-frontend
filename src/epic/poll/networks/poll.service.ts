import axiosClient from "../../../network/axios-client";
import { NetworkPath } from "../../../network/network-path";
import type { PollCreateModel } from "../models/poll-create.model";
import type { PollResponseModel } from "../models/poll-response.model";
import type { PollModel } from "../models/poll.model";

export class PollService {
    
    static async getPoll(pollId: string): Promise<PollModel> {
        try {
            const response = (await axiosClient.get<PollModel>(NetworkPath.Poll.getPoll(pollId))).data;
            return response;
        } catch (error) {
            console.error("Error fetching poll:", error);
            throw error;
        }
    }

    static async createPoll(body: PollCreateModel): Promise<PollResponseModel> {
        try {
            const response = (await axiosClient.post<PollResponseModel>(NetworkPath.Poll.createPoll(), body)).data;
            return response;
        } catch (error) {
            console.error("Error creating poll:", error);
            throw error;
        }
    }

}