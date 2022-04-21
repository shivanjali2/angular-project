import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularprj';
  message:string="my first project";
  
// getvalue()
//   {
//     return "get function data"
//   }

// getName()
// {
//   alert("function called")
// }

getvalue(name:string)
{
  alert("name")
}

}
