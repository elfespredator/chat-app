const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Créer une application Express
const app = express();

// Créer un serveur HTTP
const server = http.createServer(app);

// Créer une instance de Socket.io
const io = socketIo(server);

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static('public'));

// Gérer les connexions WebSocket
io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');

  // Écouter l'événement 'chat message' et envoyer un message à tous les clients
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Gérer la déconnexion
  socket.on('disconnect', () => {
    console.log('Un utilisateur est déconnecté');
  });
});

// Démarrer le serveur
server.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur http://localhost:3000');
});
