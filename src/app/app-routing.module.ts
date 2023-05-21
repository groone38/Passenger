import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengersDashboardComponent } from './passengers-dashboard/passengers-dashboard/passengers-dashboard.component';
import { ModalLoginComponent } from './modal/modal-login/modal-login.component';
import { ModalRegisterComponent } from './modal/modal-register/modal-register.component';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'passenger',
    component: PassengersDashboardComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'login', component: ModalLoginComponent },
  { path: 'register', component: ModalRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
