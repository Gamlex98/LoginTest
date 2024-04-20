// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminInterfaceComponent } from './Interfaces/admin-interface/admin-interface.component';
import { UserInterfaceComponent } from './Interfaces/user-interface/user-interface.component';
import { GuestInterfaceComponent } from './Interfaces/guest-interface/guest-interface.component';
import { AdminGuard } from './guards/adminguard.guard';
import { UserGuard } from './guards/userguard.guard';
import { GuestGuard } from './guards/guestguard.guard';
import { NotFoundComponent } from './Interfaces/not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'admin', component: AdminInterfaceComponent, canActivate: [AdminGuard] },
  { path: 'user', component: UserInterfaceComponent, canActivate: [UserGuard] },
  { path: 'guest', component: GuestInterfaceComponent, canActivate: [GuestGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
