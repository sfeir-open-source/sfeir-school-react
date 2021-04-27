export interface Message {
  id: string;
  text: string;
}

export type Handler = (message: Message) => void;

class Subscriber {
  subscribed = {};
  messageNumber = 0;

  subscribe(room: string, handler: Handler) {
    console.log("subscribe", room);

    this.subscribed[room] = setInterval(() => {
      handler({
        id: `${room}_${this.messageNumber}`,
        text: `[${room}] Message n°${this.messageNumber}`,
      });

      this.messageNumber++;
    }, 1000);
  }

  unsubscribe(room: string) {
    console.log("unsubscribe", room);
    clearInterval(this.subscribed[room]);
  }
}

export default new Subscriber();
