import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefilterdata'
})
export class PipefilterdataPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log("this is from pipe", value, args);
    if (!args) {
      return value;
    } else {
      args = args.toLocaleLowerCase();
    }

    return value.filter((note: any) => {
      return note.author.toLocaleLowerCase().includes(args) | note.bookName.toLocaleLowerCase().includes(args);

    })
  }

}
