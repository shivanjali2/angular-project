import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-binding',
  templateUrl: './product-binding.component.html',
  styleUrls: ['./product-binding.component.css']
})
export class ProductBindingComponent implements OnInit {


  name="shivanjali"
  last_name=563
  number=234
  constructor() { }

  ngOnInit(): void {
  }

}
