/**
 * Created by yukui on 2016/9/26.
 */

import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name:'awesome'})
export class AwesomePipe implements PipeTransform{
    transform(phrase: string) {
        return phrase ? 'Awesome ' + phrase : '';
    }
}