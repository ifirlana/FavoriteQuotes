import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Country } from '../data/quotes.interface';
/**
 * Generated class for the Quotes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes {

  countryCollection : {
    address_components : Country[],
    formatted_address : string,
    partial_match : string,
    place_id :string
  }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Quotes');
    this.countryCollection = this.navParams.data;
  }

}