import { Component } from '@angular/core';
import { Favorites } from '../favorites/favorites';
import { Library } from '../library/library';

/**
 * Generated class for the Tab page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class Tab {

  favoritesPage = Favorites;
  libraryPage = Library;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab');
  }

}
