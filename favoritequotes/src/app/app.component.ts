import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { Tab } from '../pages/tab/tab';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Tab;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      let db = new SQLite();
      db.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {


          db.executeSql('create table people(firstname VARCHAR(32), lastname  VARCHAR(32))', {})
            .then(() =>
            {
              alert('Executed SQL')
            })
            .catch(e => {
              console.log(JSON.stringify(e));
              console.log(e)
            });


        })
        .catch(e => console.log(e));
    });
  }
}

