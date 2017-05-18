import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Favorites } from '../pages/favorites/favorites';
import { Library } from '../pages/library/library';
import { Quote } from '../pages/quote/quote';
import { Quotes } from '../pages/quotes/quotes';
import { Settings } from '../pages/settings/settings';
import { Tab } from '../pages/tab/tab';

// service
import { QuotesService } from '../services/quotes';

@NgModule({
  declarations: [
    MyApp,
    Favorites,
    Library,
    Quote,
    Quotes,
    Settings,
    Tab
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Favorites,
    Library,
    Quote,
    Quotes,
    Settings,
    Tab
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService
  ]
})
export class AppModule {}
