import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }
  // transform(value:any,args: any[]): any {
  //   return filter(it => {
  //     if(!args){
  //       return value;
  //     }
  //     const title=it.title.toLowecasse().startsWith(args.toLowerCase());
  //     return title;
  //   });
}

