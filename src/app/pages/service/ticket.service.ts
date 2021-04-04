import { WebSocketService } from './web-socket.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient,
    private wsService: WebSocketService
  ) { }

  // getTickets():Observable<Ticket[]>{
  //   return this._http.get<Ticket[]>('http://localhost:3000/tickets');
  // }

  listenNextTicket(){
    return this.wsService.listen('ticket-next');
  }
}
