export function createChatRoom(url, roomId) {
  return {
    connect() {
      console.log(`Connecting to ${url} with roomId ${roomId}`);
    },
    disconnect() {
      console.log(`Disconnected from ${url} with roomId ${roomId}`);
    },
  };
}

// export { createChatRoom };
