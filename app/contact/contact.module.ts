/**
 * Created by yukui on 2016/9/26.
 */

import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ContactComponent} from "./contact.component";
import {HighlightDirective} from "./highlight.directive";
import {AwesomePipe} from "./awesome.pipe";
import {ContactService} from "./contact.service";
import {routing} from "./contact.routing";
@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        routing
    ],
    declarations:[
        ContactComponent,
        HighlightDirective,
        AwesomePipe
    ],
    providers:[ContactService]
})
export class ContactModule{}