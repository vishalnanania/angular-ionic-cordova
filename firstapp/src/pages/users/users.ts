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
    console.log('ionViewCanEnter for authguard for entering the page.');
    return Math.random() < 0.5; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad started laoding. onces its cahched it will not come to this method.');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ready to enter the page.');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter entered the page.');
  }

  ionViewCanLeave() : boolean | Promise<any> {
    console.log('ionViewCanLeave for authguard for leaving the page.');
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000);
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave ready to leave the page.');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave left the page.');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload page is distroyed. this method will execute when page is removed from stack.');
  }

  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name});
  }

}
