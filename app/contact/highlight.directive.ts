/**
 * Created by yukui on 2016/9/26.
 */

import {Directive, Renderer, ElementRef} from "@angular/core";
@Directive({selector: '[highlight],input'})
export class HighlightDirective {
    constructor(renderer: Renderer, el: ElementRef) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'powderblue');
        console.log(
            `* Contact highlight called for ${el.nativeElement.tagName}`);
    }
}