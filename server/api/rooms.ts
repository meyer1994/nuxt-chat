import { type Room } from "vue-advanced-chat"

const rooms: Room[] = [
  { roomId: "1", roomName: "Chat", users: [], avatar: "https://i.pravatar.cc/100" },
];

export default defineEventHandler(async (event) => {
  return rooms;
})
