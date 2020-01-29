import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/auth/models/Customer';
import { Address } from 'cluster';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: Customer;
  address:any=[];

  constructor(private svc: AddressService) { }

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem("customer"));
    console.log(this.customer);
    console.log(this.customer.customerId);

     this.svc.getCustAddress(this.customer.customerId)
     .subscribe(
       data => {
         this.address = data;
         console.log(this.address);
       }
     ); 
  }


}
