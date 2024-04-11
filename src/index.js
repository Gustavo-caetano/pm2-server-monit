const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3001;

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');
  // console.log(socket.id)

  socket.emit('mensagem', 'Bem-vindo! Você está conectado.');
  socket.on('mensagem', (processinfo) => {
    console.log(processinfo.status);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
