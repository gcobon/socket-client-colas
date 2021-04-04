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
    private wsService:WebSocketService
  ) { }

  ngOnInit(): void {
    this.wsService.listen('ticket-new').subscribe(
      (ticket: Ticket) => {
        this.newTicket = ticket;
      }
    );
  }

  generateTicket(){
    this.wsService.emit('ticket-new');
  }
}
