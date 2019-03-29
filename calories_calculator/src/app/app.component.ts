import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// const settings = {timestampsInSnapshots: true};
// const config = {
//   apiKey: 'AIzaSyAzmgLgAQV0V5R3Arqby_AN7-RfY1d-_Cg',
//     authDomain: 'nutrition-calculator-2e6e3.firebaseapp.com',
//     databaseURL: 'https://nutrition-calculator-2e6e3.firebaseio.com',
//     projectId: 'nutrition-calculator-2e6e3',
//     storageBucket: 'nutrition-calculator-2e6e3.appspot.com',
//     messagingSenderId: '380613560374'
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {}
    ngOnInit() {
      // firebase.initializeApp(config);
      // firebase.firestore().settings(settings);
    }
}
