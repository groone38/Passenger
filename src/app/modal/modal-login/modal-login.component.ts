import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalServicesService } from '../modal-services.service';
import { User } from 'src/app/models/user.model';

@Component({
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent implements OnInit {
  public loginForms!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly modalServicesService: ModalServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForms = this.formBuilder.group({
      email: [''],
      password: [''],
      name: [''],
      tel: [''],
    });
  }

  public login() {
    this.modalServicesService.get().subscribe((res) => {
      const login = res.find(
        (item: User) =>
          item.email === this.loginForms.value.email &&
          item.password === this.loginForms.value.password
      );
      if (login) {
        this.loginForms.reset();
        localStorage.setItem('token', `${login.id}`);
        this.router.navigate(['passenger']);
      }
    });
  }
}
