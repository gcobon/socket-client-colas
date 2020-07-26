import { SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://app-colas-socket-io.herokuapp.com/', options: {} };

export const environment = {
  production: true,
  socketConfig: config
};
