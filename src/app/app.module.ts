import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { DatePicker } from '@ionic-native/date-picker';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServerServiceProvider } from '../providers/server-service/server-service';
import { AppdataProvider } from '../providers/appdata/appdata';
import { VerifyServiceProvider } from '../providers/verify-service/verify-service';


@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:true,
    }),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerServiceProvider,
    AppdataProvider,
    DatePicker,
    VerifyServiceProvider
  ]
})
export class AppModule {}
