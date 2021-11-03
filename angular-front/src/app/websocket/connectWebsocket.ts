import { environment } from './../../environments/environment';
import { connectToWebsocket, SocketDecorator } from 'websocket-decorator';

const { websocketServerOrigin } = environment;

export let socket: SocketDecorator | null = null;

export const connectSocket = () => {
  socket = connectToWebsocket(`wss://${websocketServerOrigin}:5000`);
};

export default connectSocket;