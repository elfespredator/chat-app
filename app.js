const socket = io();

// Sélectionner les éléments HTML
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const messages = document.querySelector('#messages');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = input.value;
  if (message) {
    // Émettre le message au serveur
    socket.emit('chat message', message);
    input.value = '';
  }
});

// Écouter les messages du serveur
socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight; // Faire défiler vers le bas
});
