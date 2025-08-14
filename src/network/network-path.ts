export class NetworkPath {

  static Poll = class {
    static getPoll(pollId: string) {
      return `/polls/${pollId}`;
    }

    static vote(pollId: string) {
      return `/polls/${pollId}/answer`;
    }
    
    static createPoll() {
      return `/polls`;
    }

    static updatePoll(pollId: string) {
      return `/polls/${pollId}`;
    }
  }

}