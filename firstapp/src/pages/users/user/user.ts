import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage {
    name: string;

    constructor(private navParams: NavParams){}

    ngOnInit() {
        this.name = this.navParams.get('userName');
    }
}