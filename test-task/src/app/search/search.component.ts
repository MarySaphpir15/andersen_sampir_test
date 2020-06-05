import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchService} from './service/search.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchComponent {
  searchField = new FormControl('');
  results: string;

  constructor(private searchService: SearchService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  search(): void {
    const query = this.searchField.value;
    if (query.length) {
      this.searchService.getItems({query})
        .pipe(take(1))
        .subscribe((searchResult: string) => {
          this.results = searchResult;
          this.changeDetectorRef.detectChanges();
        });
    }
  }
}
