import { type Message } from "vue-advanced-chat";

export const messages: Message[] = [
  { _id: "1", senderId: "1", content: "Hello World", avatar: "https://i.pravatar.cc/100?u=1" },
]; 

export default defineEventHandler(async (event) => {
  return messages;
})
