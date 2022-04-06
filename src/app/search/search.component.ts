import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  giphies: any[] = [];
  collection: any[] = [];
  config: any;
  count: number = 1;
  itemsPerPage: number = 9;
  searchData: string = '';
  imageNotFound = 'No Images Found';

  constructor(public searchService: SearchService) {
   
  }

  ngOnInit(): void {

    this.searchData = ''
    this.config = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.count,
      totalItems: 50
    };

  }

  performSearch(searchTerm: HTMLInputElement): void {

    this.searchData = searchTerm.value;

    this.searchService.getSearchImageList(searchTerm.value).subscribe((res: any) => {
      this.giphies = res.data;

    })

  }


  pageChanged(event: number) {
    this.count = event;

    this.config.currentPage = this.count;
    var offset = this.itemsPerPage*this.count ;
    this.searchService.getOffsetImageList(this.searchData, offset).subscribe((res: any) => {
      this.giphies = res.data;
    })

  }


}
