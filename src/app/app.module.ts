import { WebSocketService } from './pages/service/web-socket.service';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//socket
import { SocketIoModule } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { HomeComponent } from './pages/home/home.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { PublicComponent } from './pages/public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    HomeComponent,
    NewTicketComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(environment.socketConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private wsService:WebSocketService
    ){}
}
