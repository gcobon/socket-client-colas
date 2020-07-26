import { WebSocketService } from './web-socket.service';
import { Observable } from 'rxjs';
import { Ticket } from './../interfaces/ticket';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private _http: HttpClient,
    private _wsService: WebSocketService
  ) { }

  getTickets():Observable<Ticket[]>{
    return this._http.get<Ticket[]>('http://localhost:3000/tickets');
  }

  listenNextTicket(){
    return this._wsService.listen('ticket-next');
  }
}
