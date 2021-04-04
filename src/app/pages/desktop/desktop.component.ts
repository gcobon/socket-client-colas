import { WebSocketService } from './../service/web-socket.service';
import { TicketService } from './../service/ticket.service';
import { Ticket } from './../interfaces/ticket';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent implements OnInit {

  public desk:number;
  public nextTicket:Ticket;

  constructor(
    private route: ActivatedRoute,
    private wsService:WebSocketService,
    private ticketService: TicketService
    ) {}

  ngOnInit(): void {
    this.getDesk();
    this.ticketService.listenNextTicket().subscribe(
      (ticket: Ticket) => {
        this.nextTicket = ticket;
      }
    )
  }

  getDesk(){
    this.route.params.subscribe((params) => {
      this.desk = params.id;
    });
  }

  getNextTicket(){
    this.wsService.emit('ticket-next', this.desk);
  }
}
