import { setupUIHandlers } from './ui-handlers.js';
import { setupSocketEvents } from './socket-events.js';
import { roomNameInput } from './dom-elements.js';

export const socket = io();

document.addEventListener('DOMContentLoaded', () => {
    setupUIHandlers();
    setupSocketEvents();

    const urlParams = new URLSearchParams(window.location.search);
    const roomName = urlParams.get('room');
    if (roomName) {
        roomNameInput.value = roomName;
    }
});
