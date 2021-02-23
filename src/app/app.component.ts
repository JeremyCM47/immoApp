import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'immoApp';

  goods: [];

  constructor(private goodService: GoodService) {
    this.goods = this.goodService.goods;
  }
}
