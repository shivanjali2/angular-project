import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayval="";


  getvalue(val:string)
  {

    console.warn(val)
    this.displayval=val

  }

}
