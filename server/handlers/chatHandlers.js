export const chatHandlers = (io, socket) => {
    socket.on('chatMessage', (data) => {
        io.to(data.roomName).emit('newMessage', { username: data.username, message: data.message });
    });
};
