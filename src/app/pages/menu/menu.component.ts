import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/sevices/orderDetails/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  constructor(
    private orderdetails: OrderDetailsService,
  ){}
  foodData: any;
  ngOnInit(): void {
    this.foodData = this.orderdetails.foodDetails;
  }

}
