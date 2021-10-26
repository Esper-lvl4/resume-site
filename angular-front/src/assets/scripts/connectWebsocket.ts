import { connectToWebsocket, SocketDecorator } from 'websocket-decorator';

export let socket: SocketDecorator | null = null;

export const connectSocket = () => {
  socket = connectToWebsocket("ws://localhost:5000");
};

export default connectSocket;