import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "../common/toastr.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
    `]
})

export class LoginComponent {
    constructor(private authService:AuthService, private router:Router, private toastr:ToastrService){}
    userName:any;
    password:any;
    mouseoverLogin:boolean;

    login(formValues:any){
        this.authService.loginUser(formValues.userName, formValues.password);
        this.toastr.success('Login successful');
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}