import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  constructor(private auth: AuthService, private router:Router) {}

  ngOnInit(): void {

    let firstName = new FormControl(this.auth.currentUser.firstName);
    let lastName = new FormControl(this.auth.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues: any) {
    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['/events']);

  }
}