import { rooms } from '../state.js';

export const roomManagementHandlers = (io, socket) => {
    socket.on('leaveRoom', (roomName) => {
        if (rooms[roomName] && rooms[roomName].players[socket.id]) {
            const username = rooms[roomName].players[socket.id].username;
            socket.leave(roomName);
            delete rooms[roomName].players[socket.id];
            io.to(roomName).emit('playerList', Object.values(rooms[roomName].players));
            io.to(roomName).emit('message', `${username} has left the room.`);
            console.log(`${username} left room: ${roomName}`);

            if (Object.keys(rooms[roomName].players).length === 0) {
                if (rooms[roomName].timerInterval) {
                    clearInterval(rooms[roomName].timerInterval);
                }
                delete rooms[roomName];
                console.log(`Room ${roomName} deleted as all players left.`);
            }
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        for (const roomName in rooms) {
            if (rooms[roomName].players[socket.id]) {
                const username = rooms[roomName].players[socket.id].username;
                delete rooms[roomName].players[socket.id];
                io.to(roomName).emit('playerList', Object.values(rooms[roomName].players));
                io.to(roomName).emit('message', `${username} has left the room.`);
                if (Object.keys(rooms[roomName].players).length === 0) {
                    if (rooms[roomName].timerInterval) {
                        clearInterval(rooms[roomName].timerInterval);
                    }
                    delete rooms[roomName];
                    console.log(`Room ${roomName} deleted as all players left.`);
                }
                break;
            }
        }
    });
};
