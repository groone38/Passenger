import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PassengersDashboardComponent } from './passengers-dashboard/passengers-dashboard/passengers-dashboard.component';
import { PassengerCountComponent } from './passengers-dashboard/components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './passengers-dashboard/components/passenger-detail/passenger-detail.component';
import { PassengersDashboardService } from './passengers-dashboard/passengers-dashboard.service';
import { ModalLoginComponent } from './modal/modal-login/modal-login.component';
import { ModalRegisterComponent } from './modal/modal-register/modal-register.component';
import { HeaderComponent } from './passengers-dashboard/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengersDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PassengersDashboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
