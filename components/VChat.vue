<template>
  <vue-advanced-chat
    height="calc(100vh - 20px)"
    :current-user-id="currentUserId"
    :rooms="roomsData"
    :messages="messagesData"
    :single-room="true"
    :messages-loaded="messagesStatus == 'success'"
    :rooms-loaded="roomsStatus == 'success'"
    @send-message="sendMessage($event.detail[0])"
  />
</template>

<script lang="ts" setup>
import { register, type Message, type Room } from "vue-advanced-chat";
register();

const currentUserId = ref("1");

const [
  { data: messagesData, status: messagesStatus, refresh: messagesRefresh },
  { data: roomsData, status: roomsStatus, refresh: roomsRefresh },
] = await Promise.all([useFetch("/api/messages"), useFetch("/api/rooms")]);

let id = 1;
const sendMessage = async (message: Message) => {
  const data = await $fetch("/api/messages", {
    method: "POST",
    body: {
      content: message.content,
      senderId: Math.random() > 0.5 ? "1" : "2",
    },
  });
  messagesData.value = [...(messagesData.value || []), data];
};
</script>
