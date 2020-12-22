import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product',
  template: `
  <h2>This is the product page</h2>
  <ul>
  <li (click)="onSelect(prod)" *ngFor="let prod of products">
 {{prod.id  }}
  {{prod.name  }}
  {{prod.price}}
  </li>
  </ul>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

public products=[
  {"id":1, "name":"pizza", "price":100},
  {"id":2, "name":"Donut", "price":150},
  {"id":3, "name":"Bike", "price":20000},
  {"id":4, "name":"Mobile shop", "price":1000},
  {"id":5, "name":"Gardening", "price":500},
]

  constructor(private routern: Router) { 

  }

  ngOnInit() {
  }
  onSelect(prod){
    this.routern.navigate(["/products",prod.id]);
  }
}
