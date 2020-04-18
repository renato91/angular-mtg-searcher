import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardName: string = '';
  public items: any = {};

  constructor(private http: HttpClient) {}

  getCards(cardName) {
    this.http
      .get(
        'https://api.scryfall.com/cards/search?q=' +
          encodeURIComponent(cardName)
      )
      .subscribe(response => {
        this.items = response;
      });
  }

  ngOnInit() {}
}
