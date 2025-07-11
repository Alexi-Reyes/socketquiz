import { setupUIHandlers } from './ui-handlers.js';
import { setupSocketEvents } from './socket-events.js';

export const socket = io();

document.addEventListener('DOMContentLoaded', () => {
    setupUIHandlers();
    setupSocketEvents();
});
