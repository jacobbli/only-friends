var http = require('http');
const WebSocket = require('ws')

function initializeSocket(app) {
  var server = http.createServer(app);


  //initialize the WebSocket server instance
  const wss = new WebSocket.WebSocketServer({ server });

  wss.on('connection', (ws) => {
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

      //log the received message and send it back to the client
      console.log('received: %s', message);
      ws.send(`Hello, you sent -> ${message}`);

      if (message == 'refresh prompts') {
        wss.clients.forEach(client => {
          client.send('refresh prompts')
        })
      }

      if (message == 'refresh post') {
        wss.clients.forEach(client => {
          client.send('refresh post')
        })
      }
    });

    ws.send('Hi there, I am a WebSocket server');
  });

  server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
  });

}

module.exports = {
  initializeSocket
};
