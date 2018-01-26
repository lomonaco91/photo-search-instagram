import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TopNavComponent } from './components/top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [ TopNavComponent, NgbModule ],
  declarations: [TopNavComponent]
})
export class SharedModule { }
