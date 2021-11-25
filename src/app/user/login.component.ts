import { Component, Inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from "../common/toastr.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
    `]
})

export class LoginComponent {
    constructor(private authService:AuthService, 
        private router:Router, 
        @Inject(TOASTR_TOKEN) private toastr:Toastr){}
    userName:any;
    password:any;
    mouseoverLogin:boolean;
    loginInvalid = false;

    login(formValues:any){
        this.authService.loginUser(formValues.userName, formValues.password)
        .subscribe(resp => {
            if(!resp) {
                this.loginInvalid = true;
                //this.toastr.success('Login unsuccessful');
            } else {
                this.toastr.success('Login successful');
                this.router.navigate(['events']);
            }
        });

    }

    cancel() {
        this.router.navigate(['events']);
    }
}