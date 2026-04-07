import { MessageSquare, X } from "lucide-react";

interface ChatbotIconProps {
  isOpen: boolean;
  toggleChat: () => void;
}

export function ChatbotIcon({ isOpen, toggleChat }: ChatbotIconProps) {
  return (
    <button
      onClick={toggleChat}
      className={`fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-blue-500/50
      ${isOpen 
        ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rotate-90 shadow-md shadow-black/5 dark:shadow-white/5" 
        : "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 shadow-blue-500/40"}`}
    >
      {/* Nền sáng hover giống như trang của bạn */}
      <div className={`absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-white to-transparent ${isOpen ? 'hidden' : 'block'}`} />

      {isOpen ? (
        <X size={24} className="transform -rotate-90 transition-transform" />
      ) : (
        <MessageSquare size={24} className="group-hover:scale-110 transition-transform duration-300" />
      )}
    </button>
  );
}
