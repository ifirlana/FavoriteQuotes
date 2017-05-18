import { Component } from '@angular/core';
import {  NavController, NavParams, Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

// service
import { QuotesService } from '../../services/quotes';
import { Country } from '../data/quotes.interface';
/**
 * Generated class for the Favorites page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class Favorites {
  //
  public database: SQLite;
  public people: Array<Object>;
  public db = new SQLite();
  public quotesService = new QuotesService();
  quotes : Country[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
   this.refresh();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favorites');
    this.refresh_quotes();
  }

  public refresh_quotes() {
    this.quotes = this.quotesService.getFavoritesQuotes();
  }

  public add() {
  //
    this.db.create({
      name: "data.db",
      location: "default"
    }).then((db: SQLiteObject) => {
      db.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
        console.log("INSERTED: " + JSON.stringify(data));
        console.log("INSERTED: " + JSON.stringify(data));
      }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
        alert("ERROR: " + JSON.stringify(error));
      });
    });
  }
  //
  public refresh() {
    this.db.create({
      name: "data.db",
      location: "default"
    }).then((db: SQLiteObject) => {
      db.executeSql("SELECT * FROM people", []).then((data) => {
        this.people = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
          }
        }
        console.log("success: " + JSON.stringify(this.people));
      }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
        alert("ERROR: " + JSON.stringify(error));
      });
    });
  }
}
