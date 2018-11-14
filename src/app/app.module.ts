import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule} from'@angular/common/http'
import { from } from 'rxjs';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipes';
import {StarComponent} from './shared/star.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
