
const socket_url = `${process.env.VUE_APP_SOCKET_HOST}:${process.env.VUE_APP_SOCKET_PORT}`
var ws = null

export function initializeSocket() {
  ws = new WebSocket(socket_url);

  ws.onopen = function () {
    console.log("Subscribed to WebSocket server");
  };
}

export function broadcast(message) {
  ws.send(message)
}

export async function subscribeToPosts(message, callbackFn) {
  ws.onmessage = async (event) => {
    if (event.data == message) {
      callbackFn()
    }
  }
}