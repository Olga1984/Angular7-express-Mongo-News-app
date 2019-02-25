import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../models/news';

@Pipe({
  name: 'newsfilter'
})
export class NewsfilterPipe implements PipeTransform {
  transform(items: News[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.title.toLowerCase().includes(searchText);
    });
  }

}

