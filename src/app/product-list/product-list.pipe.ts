import { PipeTransform, Pipe } from '@angular/core';
import { Productlist } from './productlist';

@Pipe({ name: 'productFilter' })


export class ProductFilterPipe implements PipeTransform {
  nameResult: string;

  transform(products: any[], searchTerm: string): any[] {
    if (searchTerm === "") {
      return products;
    }
    searchTerm = searchTerm.toLowerCase();
    return products.filter(it => {
      if (it.name.toLowerCase().includes(searchTerm)) {
        return it;
      }
    });
  }
}
