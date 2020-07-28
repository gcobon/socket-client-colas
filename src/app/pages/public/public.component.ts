import { Ticket } from './../interfaces/ticket';
import { WebSocketService } from './../service/web-socket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit, OnDestroy {
  public nextTicket: Ticket;
  public previusTicket: Ticket[] = [];
  private subscription: Subscription;

  constructor(private _wsService: WebSocketService) {}

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('container');
    this.listenNextTicket();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  listenNextTicket() {
    this.subscription = this._wsService
      .listen('ticket-public')
      .subscribe((ticket: Ticket) => {
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
