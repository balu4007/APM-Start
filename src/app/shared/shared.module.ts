import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpaces } from './convert-to-spaces.pipes';
import { StarComponent } from './star.component';

@NgModule({
  declarations: [
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    ConvertToSpaces,
    StarComponent
  ]
})
export class SharedModule { }
