import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public QuotesService: QuotesService, private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.QuotesService.getFavorites();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove) => {
      if (remove) {
        this.removeQuoteFromFavorites(quote);
      }
    });
  }

  removeQuoteFromFavorites(quote: Quote) {
    this.QuotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.QuotesService.getFavorites();
  }
}
