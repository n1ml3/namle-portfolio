import { ChatbotIcon } from "./ChatbotIcon";
import { ChatWindow } from "./ChatWindow";
import { useChatbot } from "./useChatbot";

export default function Chatbot() {
  const { isOpen, toggleChat, messages, sendMessage, isLoading } = useChatbot();

  return (
    <>
      <ChatWindow 
        isOpen={isOpen} 
        messages={messages} 
        isLoading={isLoading} 
        onSendMessage={sendMessage} 
      />
      <ChatbotIcon isOpen={isOpen} toggleChat={toggleChat} />
    </>
  );
}
