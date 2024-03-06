import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'chat/:id', component: ChatComponent },
];
