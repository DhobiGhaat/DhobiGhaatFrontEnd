import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  showing:boolean;

  constructor(private svc: LoginService) {
      this.showing = !this.svc.isUserLoggedIn();
   }

  ngOnInit() {
  }

  Logout(){
    localStorage.clear();
  }

}
