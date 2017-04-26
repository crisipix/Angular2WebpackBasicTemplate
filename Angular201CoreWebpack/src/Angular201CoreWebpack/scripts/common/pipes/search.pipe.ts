
import {Injectable, Pipe, PipeTransform } from '@angular/core';

// pipe is going to filter out and code if it doesn't contain the search term. 
// or if the descriptions is not null and doesn't contain the search term. it will ignore null descriptions. 
//this pipe is stateful/non-pure
@Pipe({
    name: 'search',
    pure: false
})
//@Injectable()
export class SearchFilterPipe implements PipeTransform {
    temp: Array<any> = [];
    transform(items: any[], args: string): any {
        //console.log(`items ${items.map(i => i.code)}`);
        //console.log(`items ${items.map(i => i.desc)}`);
        //console.log(items);
        //console.log(`args ${args}`);
        if (!args){ return items;}
        let searchTerm = args.toUpperCase() || '';

        // Filters out anything that doesn't exist within the code or the description and isn't null
        // If the description is null/empty then the code has to match the filter.
        //return items.filter(item => item &&
        //    (item.code.toUpperCase().indexOf(searchTerm) !== -1 ||
        //    (item.desc && item.desc.toUpperCase().indexOf(searchTerm) !== -1)));


        // give new copy of an array to trigger change preventing need to do list = list.concat(newItem); 
        this.temp.length = 0;
        this.temp.push(...items.filter(item => item &&
            (item.code.toUpperCase().indexOf(searchTerm) !== -1 ||
            (item.desc && item.desc.toUpperCase().indexOf(searchTerm) !== -1))));
        return this.temp;

    }
}