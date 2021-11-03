import { environment } from './../../environments/environment';
import { connectToWebsocket, SocketDecorator } from 'websocket-decorator';

const { websocketServerUrl } = environment;

export let socket: SocketDecorator | null = null;

export const connectSocket = () => {
  socket = connectToWebsocket(websocketServerUrl);
};

export default connectSocket;