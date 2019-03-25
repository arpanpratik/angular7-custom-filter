import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, search: any): any {
    if (!search) return values;
    search = search.toLowerCase();
    let filteredArray = [];

    values.filter(item => {
      let itemKeys = Object.keys(item);
      itemKeys.forEach(key => {
        if (typeof item[key] == "string") {
          if (item[key].toLowerCase().includes(search)) {
            filteredArray.push(item);
          }
        }
      });
    });
    return filteredArray;
  }
}