import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getCustAddress(customerId:number){
  return this.http.get<any[]>("http://localhost:7777/addresslist"+"?custId="+customerId);
  }
}
