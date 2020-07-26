import { RouterModule, Routes as routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PublicComponent } from './pages/public/public.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { HomeComponent } from './pages/home/home.component';
import { DesktopComponent } from './pages/desktop/desktop.component';

const routes: routes = [
  { path: 'desktop/:id', component: DesktopComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-ticket', component: NewTicketComponent },
  { path: 'public', component: PublicComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
