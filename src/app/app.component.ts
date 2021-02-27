import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'springboot-api-rest';
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:8080/personas').subscribe((data) => {
      console.log('dataaa', data);
    });
  }
}
