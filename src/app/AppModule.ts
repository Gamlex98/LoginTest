import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import { AdminInterfaceComponent } from './Interfaces/admin-interface/admin-interface.component';
import { UserInterfaceComponent } from './Interfaces/user-interface/user-interface.component';
import { GuestInterfaceComponent } from './Interfaces/guest-interface/guest-interface.component';
import { NotFoundComponent} from './Interfaces/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminInterfaceComponent,
    UserInterfaceComponent,
    GuestInterfaceComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
