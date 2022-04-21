import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {


 name="shivanjali"
  color="orange"
  bgcolor="green"
  updatedetails()
  {
    this.color="blue";
    
  }

  update()
  {
    this.name="kalwanlar"
    this.color="red"
    this.bgcolor="blue"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
