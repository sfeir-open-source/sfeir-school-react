import React, { useEffect, useState } from "react";
import Service, { Message } from "./subscriber";

interface Props {
  room: string;
}

export default function Messages({ room }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const onMessageReceived = (message) => {
      setMessages((oldMessages) => {
        return [message, ...oldMessages];
      });
    };
    Service.subscribe(room, onMessageReceived);

    return () => {
      Service.unsubscribe(room);
    };
  }, [room]);

  return (
    <div className="details">
      <h2>Messages from {room}</h2>
      <div className="messages">
        {messages.map((m) => (
          <div key={m.id}>{m.text}</div>
        ))}
      </div>
    </div>
  );
}
