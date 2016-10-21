/**
 * Created by yukui on 2016/9/26.
 */

import {Component, Input} from "@angular/core";
import {UserService} from "./user.service";
@Component({
    selector: '<app-title></app-title>',
    templateUrl: 'app/title.component.html'
})

export class TitleComponent {
    @Input() subtitle = '';
    title = 'Tour of Heroes';
    user = '';

    constructor(private userService: UserService) {
        this.user = userService.userName;
    }
}