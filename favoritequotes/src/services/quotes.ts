/**
 * Created by ikhlasfirlana on 5/12/17.
 */
import {Country} from '../pages/data/quotes.interface'

export class QuotesService {
  private favoritesCountry : Country[] = [];

  addQuoteToFavorites (quote : Country) {
    this.favoritesCountry.push(quote);
  }

  removeQuotesFromFavorites (quote:Country) {
    const position = this.favoritesCountry.findIndex((quoteEl : Country) => {
      return quoteEl.long_name == quote.long_name;
    });
    this.favoritesCountry.splice(position, 1);
  }

  getFavoritesQuotes () {
    return this.favoritesCountry.slice();
  }
}
