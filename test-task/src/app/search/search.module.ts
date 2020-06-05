import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {SearchComponent} from './search.component';
import {SearchService} from './service/search.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponent],
  declarations: [SearchComponent],
  providers: [SearchService],
})
export class SearchModule {
}
