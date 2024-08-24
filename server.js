const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// server.js
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      try {
        const parsedMessage = JSON.parse(message);
        // Broadcast message to all clients except the sender
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(parsedMessage)); // Ensure sending as JSON string
          }
        });
      } catch (error) {
        console.error('Error parsing message', error);
      }
    });
  
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
  

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
