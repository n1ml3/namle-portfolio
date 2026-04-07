export type MessageRole = "user" | "ai";

export interface Message {
  id: string;
  role: MessageRole;
  text: string;
}
