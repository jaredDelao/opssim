import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderList: Order[] = [];

  constructor(public _orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this._orderService.getOrder().subscribe(orders => {
      this.orderList = orders;      
    }) 
  }

}
