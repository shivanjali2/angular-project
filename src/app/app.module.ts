import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ClickComponent } from './click/click.component';
import { ProductBindingComponent } from './product-binding/product-binding.component';
import { IFComponent } from './if/if.component';
import { StyleComponent } from './style/style.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ClickComponent,
    ProductBindingComponent,
    IFComponent,
    StyleComponent,
    HeaderComponent,
    FormComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
