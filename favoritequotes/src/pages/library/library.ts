import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Quotes } from '../quotes/quotes'

import { Country } from '../data/quotes.interface';
import quotes from '../data/quotes';


/**
 * Generated class for the Library page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Library');
  }

  countryCollection : {
    address_components : Country[],
    formatted_address : string,
    partial_match : string,
    place_id :string
  }[];

  ngOnInit () {
    this.countryCollection = quotes;
  }

  countryPage = Quotes;
}
