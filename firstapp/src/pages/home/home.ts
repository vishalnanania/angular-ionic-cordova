import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alerCtrl: AlertController) {
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Hello, Vishal Nananiya',
      buttons: ['Ok']
    });
    alert.present()
  }

}
