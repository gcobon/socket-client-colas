import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  public socketStatus: boolean;

  constructor(private _socket: Socket) {
    this.checkStatus();
  }

  checkStatus(): void {
    this._socket.on('connect', () => {
      console.log('conectado al servidor de sockets');
      this.socketStatus = true;
    });

    this._socket.on('disconnect', () => {
      console.log('Desconectado del servidor de sockets');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: Function) {
    this._socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this._socket.fromEvent(event);
  }
}
