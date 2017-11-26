import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import { ICustomer } from './ICustomer';

@Injectable()
export class CustomerService {
    url: 'assets/data/customers.json';
    constructor(private httpClient: HttpClient) { }
    getCustomers(): Observable<ICustomer[]> {
        return this.httpClient.get<ICustomer[]>(`assets/data/customers.json`);
    }
}
