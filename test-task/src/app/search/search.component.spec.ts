import { TestBed, ComponentFixture } from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {SearchService} from './service/search.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';

const getItems = (query) => of('result');

describe('Component: Search', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        {provide: SearchService, useValue: {
            getItems
          }}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchService = TestBed.inject(SearchService);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should load search result', () => {
    spyOn(searchService, 'getItems')
      .and
      .callThrough();
    component.searchField.setValue('taglib-uri');
    component.search();
    expect(searchService.getItems).toHaveBeenCalledWith({query: 'taglib-uri'});
    expect(component.results).toEqual('result');
  });
  it('should not load search result', () => {
    spyOn(searchService, 'getItems')
      .and
      .callThrough();
    fixture.detectChanges();
    component.searchField.setValue('');
    component.search();
    expect(searchService.getItems).not.toHaveBeenCalled();
    expect(component.results).not.toEqual('result');
  });
});
