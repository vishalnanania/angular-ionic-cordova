import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from './user/user';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() : boolean | Promise<boolean> {
    console.log('ionViewCanEnter UsersPage');
    return Math.random() < 0.5; 
  }

  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name});
  }

}
