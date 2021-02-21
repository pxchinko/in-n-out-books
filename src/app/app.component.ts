/**
 * Title: app.component.ts
 * Author: Sarah Massie
 * Date: 30 January 2021
 * Description: App component for the entire application
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out-Books";
  }
}
