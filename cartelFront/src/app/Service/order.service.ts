import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  server: string = "http://localhost:8080/cardorder/";

  constructor(private httpClient: HttpClient) { }

  public postOrder(order: any) {
    return this.httpClient.post<any>(this.server + "create/one", { price: 12, creation: new Date() });
  }

}
