import axiosClient from "../../../network/axios-client";
import { NetworkPath } from "../../../network/network-path";
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

}