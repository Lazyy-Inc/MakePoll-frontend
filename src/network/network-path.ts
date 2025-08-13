export class NetworkPath {

  static Poll = class {
    static getPoll(pollId: string) {
      return `/polls/${pollId}`;
    }

    static createPoll() {
      return `/polls`;
    }

    static updatePoll(pollId: string) {
      return `/polls/${pollId}`;
    }
  }

}