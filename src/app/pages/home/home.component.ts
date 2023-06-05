import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/sevices/orderDetails/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(
    private orderdetails: OrderDetailsService,
  ){}

  foodData: any;

  ngOnInit(): void {
this.foodData = this.orderdetails.foodDetails;
  }

}
