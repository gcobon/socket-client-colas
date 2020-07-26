import { Ticket } from './../interfaces/ticket';
import { WebSocketService } from './../service/web-socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  public newTicket: Ticket;

  constructor(
    private _wsService:WebSocketService
  ) { }

  ngOnInit(): void {
    this._wsService.listen('ticket-new').subscribe(
      (ticket: Ticket) => {
        this.newTicket = ticket;
      }
    );
  }

  generateTicket(){
    this._wsService.emit('ticket-new');
  }
}
