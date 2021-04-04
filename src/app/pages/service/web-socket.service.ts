import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  public socketStatus: boolean;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus(): void {
    this.socket.on('connect', () => {
      console.log('conectado al servidor de sockets');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor de sockets');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this.socket.fromEvent(event);
  }
}
