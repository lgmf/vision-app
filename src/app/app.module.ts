import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VisionPage } from '../pages/vision/vision';

const firebaseConfig = {
  apiKey: "AIzaSyA37kGREo66cOI_2ARmIbLf0G1N0K92Hkk",
  authDomain: "vision-app-b302e.firebaseapp.com",
  databaseURL: "https://vision-app-b302e.firebaseio.com",
  projectId: "vision-app-b302e",
  storageBucket: "vision-app-b302e.appspot.com",
  messagingSenderId: "434811995702"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera
  ]
})
export class AppModule { }