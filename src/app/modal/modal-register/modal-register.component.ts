import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalServicesService } from './../modal-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss'],
})
export class ModalRegisterComponent implements OnInit {
  public singupForms!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly modalServicesService: ModalServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.singupForms = this.formBuilder.group({
      email: [''],
      password: [''],
      name: [''],
      tel: [''],
    });
  }

  public singUp() {
    this.modalServicesService
      .postRegistr(this.singupForms.value)
      .subscribe(() => {
        this.singupForms.reset();
        this.router.navigate(['login']);
      });
  }
}
