import axiosClient from "../../../network/axios-client";
import { NetworkPath } from "../../../network/network-path";

export class PollService {
    static async getPoll(pollId: string) {
        try {
            const response = await axiosClient.get(NetworkPath.Poll.getPoll(pollId));
            return response.data;
        } catch (error) {
            console.error("Error fetching poll:", error);
            throw error;
        }

    }
}