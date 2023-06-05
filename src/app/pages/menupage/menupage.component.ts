import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/sevices/orderDetails/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit{
  constructor(
    private param: ActivatedRoute,
    private orderdetails : OrderDetailsService,
  ) {}
  getMeanuId:any;
  menuData: any;
  ngOnInit(): void {
    this.getMeanuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMeanuId, 'getmenu')
    if(this.getMeanuId){
      this.menuData = this.orderdetails.foodDetails.filter((value)=>{
        return value.id == this.getMeanuId
      })
    }
  }

}
