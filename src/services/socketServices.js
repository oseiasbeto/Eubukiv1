import io from 'socket.io-client';

const socket = io("http://localhost:4048");

console.log(socket)
export default {
    on,
    emit    
}

function on(trigger, cb) {
    socket.on(trigger, cb)
}

function emit(trigger, data) {
    socket.emit(trigger, data)
}
