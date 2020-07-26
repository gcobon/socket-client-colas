import { Ticket } from './../interfaces/ticket';
import { TicketService } from './../service/ticket.service';
import { WebSocketService } from './../service/web-socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {
  public nextTicket: Ticket;
  public previusTicket: Ticket[] = [];

  constructor(
    private _wsService: WebSocketService
  ) {}

  ngOnInit(): void {
     const body = document.getElementsByTagName('body')[0];
     body.classList.remove('container');
    this.listenNextTicket();
  }

  listenNextTicket() {
    this._wsService.listen('ticket-public').subscribe((ticket: Ticket) => {
      if (ticket) {
        this.nextTicket = ticket;
        console.log('listen-next-ticket');
        this.pushPrevTicket(ticket);
        this.putAudio(ticket);
      }
    });
  }

  pushPrevTicket(ticket: Ticket) {
    this.previusTicket.push(ticket);

    if (this.previusTicket.length > 4) {
      this.previusTicket.shift();
    }
  }

  putAudio(ticket: Ticket) {
    let audio = new Audio('./../../../assets/audio/new-ticket.mp3');
    audio.load();
    audio.play().then(() => {
      let mensaje = `Turno del cliente, ${ticket.ticket} , pasar al escritorio ${ticket.desk}`;
      speechSynthesis.speak(new SpeechSynthesisUtterance(mensaje));
    });
  }
}
