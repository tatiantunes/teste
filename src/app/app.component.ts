import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AAAAzeRkJqQ:APA91bEpJgICinKGlW8xtM82IR_tqrffCaAEVYGS01g3eRipcF5h7FQKBRMRKgerLpWxHRhSYBrT1yklVkSFng6Szx3PlN7iej2EYsVoe6CSPHFHhRxDL1pB22xk92BKk6I_67rbNiT8',
  databaseURL: 'https://find-your-help-default-rtdb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
