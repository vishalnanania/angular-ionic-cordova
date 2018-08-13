import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public quotesService: QuotesService) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead.',
          handler: () => {
            console.log('ok');
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, i changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

  onRemoveFromFavorite(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }
}
