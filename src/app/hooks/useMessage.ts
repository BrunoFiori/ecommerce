import { useState } from "react";
import { MessageType } from "../enum/MessageType";
import { IMessage } from "../interfaces/messageInterface";

const useMessage = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const addMessage = (type: MessageType, text: string | string[]) => {
    setMessages((prevMessages) => [...prevMessages, { type, text }]);
  };

  const setInfo = (text: string | string[]) => {
    addMessage(MessageType.Info, text);
  };

  const setWarning = (text: string | string[]) => {
    addMessage(MessageType.Warning, text);
  };

  const setError = (text: string | string[]) => {
    addMessage(MessageType.Error, text);
  };

  const setSuccess = (text: string | string[]) => {
    addMessage(MessageType.Success, text);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return {
    messages,
    setInfo,
    setWarning,
    setError,
    setSuccess,
    clearMessages,
  };
};

export default useMessage;
