import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import type { Message } from "./types";

interface ChatWindowProps {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (text: string) => void;
}

export function ChatWindow({ isOpen, messages, isLoading, onSendMessage }: ChatWindowProps) {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isLoading, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() && !isLoading) {
      onSendMessage(inputText);
      setInputText("");
    }
  };

  return (
    <div className="fixed bottom-28 right-8 w-80 sm:w-96 h-[500px] max-h-[75vh] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden transform transition-all animate-in fade-in slide-in-from-bottom-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center gap-3 shadow-none rounded-t-3xl">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm shadow-sm">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-sm tracking-wide">Nam Lê AI</h3>
          <p className="text-xs text-blue-100">Trợ lý ảo thông minh</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${msg.role === "user" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"}`}>
              {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div className={`p-3 max-w-[80%] text-sm leading-relaxed shadow-sm ${
              msg.role === "user" 
                ? "bg-blue-600 text-white rounded-2xl rounded-tr-none" 
                : "bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 rounded-2xl rounded-tl-none whitespace-pre-wrap border border-gray-200 dark:border-gray-700"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3 flex-row">
            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-700">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-4 bg-gray-100/80 dark:bg-gray-800/80 rounded-2xl rounded-tl-none w-16 flex items-center justify-center gap-1.5 shadow-sm border border-gray-200 dark:border-gray-700">
              <span className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-3 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm flex gap-2 border-t border-gray-200 dark:border-gray-800">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Hỏi gì đó về Nam..."
          className="flex-1 px-4 py-2 sm:py-2.5 text-sm rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-800 dark:text-gray-200 transition-colors shadow-inner"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
          disabled={isLoading || !inputText.trim()}
        >
          <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
        </button>
      </form>
    </div>
  );
}
