import { Component, OnInit } from '@angular/core';
import { ICustomer } from './ICustomer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'mdb-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  customers: ICustomer[] = [];
  public loading: boolean;
  stacked: boolean;
  constructor(private _cs: CustomerService) { }
  ngOnInit() {
    this.loading = true;
    this._cs.getCustomers().
      subscribe(customer => { this.customers = customer; },
      // tslint:disable-next-line:no-console
      (err) => { console.log(err); },
      () => { this.loading = false; })
  }
  toggle() {
    this.stacked = !this.stacked;
  }
}
