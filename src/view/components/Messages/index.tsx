import Alert from "@mui/material/Alert";
import React from "react";
import { MessageType } from "../../../app/enum/MessageType";
import { IMessage } from "../../../app/interfaces/messageInterface";

interface MessageProps {
  messages: IMessage[];
}

const Message: React.FC<MessageProps> = ({ messages }) => {
  const severityMap: {
    [key in MessageType]: "error" | "warning" | "info" | "success";
  } = {
    [MessageType.Error]: "error",
    [MessageType.Warning]: "warning",
    [MessageType.Info]: "info",
    [MessageType.Success]: "success",
  };

  return (
    <>
      {messages.map((msg, index) => (
        <Alert key={index} severity={severityMap[msg.type]} className="w-full">
          <div className="font-semibold">
            {Array.isArray(msg.text) ? (
              <ol className="list-disc list-inside">
                {msg.text.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            ) : (
              msg.text
            )}
          </div>
        </Alert>
      ))}
    </>
  );
};

export default Message;
