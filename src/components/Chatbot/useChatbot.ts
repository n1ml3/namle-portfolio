import { useState } from "react";
import type { Message } from "./types";

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "ai",
      text: "Xin chào! Mình là trợ lý AI ảo của Nam Lê. Mình có thể giúp gì cho bạn để tìm hiểu thêm về Nam?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message to UI
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
    };
    
    // We keep a local reference to history to pass to the API
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Build history payload (excluding the current user message and the initial welcome message)
      const historyToApi = messages
        .filter(msg => msg.id !== "welcome-1")
        .map(msg => ({
          role: msg.role,
          text: msg.text
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: newUserMessage.text,
          history: historyToApi,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "ai",
            text: data.text,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "ai",
            text: `[Lỗi] ${data.message || "Không thể trả lời lúc này."}`,
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "ai",
          text: "[Lỗi] Lỗi kết nối mạng, vui lòng thử lại sau.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    toggleChat,
    setIsOpen,
    messages,
    sendMessage,
    isLoading,
  };
}
