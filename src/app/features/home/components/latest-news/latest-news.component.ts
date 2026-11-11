import { Component } from '@angular/core';
import { NewsItem } from '../../../../models/home.model';
import { NEWS_ITEMS } from '../../data/home.data';

/** "Read Our Latest News": three equal article cards. */
@Component({
  selector: 'app-latest-news',
  standalone: true,
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent {
  readonly news: NewsItem[] = NEWS_ITEMS;
}
