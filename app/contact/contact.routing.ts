
/**
 * Created by yukui on 2016/9/26.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ContactComponent} from "./contact.component";
export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path:'contact',
        component:ContactComponent
    }
]);