import { z } from "zod";
import { messages } from "./messages.get";
import { Message } from "vue-advanced-chat";

const schema = z.object({
  _id: z.string().default(() => nextId()),
  content: z.string().min(1).max(1000),
  senderId: z.string().min(1).max(10),
});

const nextId = () => String(messages.length + 1);

export default defineEventHandler(async (event) => {
  const body: Message = await readValidatedBody(event, (e) => schema.parse(e));
  body.avatar = `https://i.pravatar.cc/100?u=${body.senderId}`; 
  messages.push(body);
  return body;
});
