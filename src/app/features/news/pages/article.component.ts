import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { Article, TocEntry } from '../../../models/home.model';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';
import { ArticleSidebarComponent } from '../components/article-sidebar/article-sidebar.component';
import { ARTICLES, articlePath, headingId } from '../data/articles.data';

/** Public news article page. The article is chosen by the `slug` value in the route data. */
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, PageBannerComponent, ArticleSidebarComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly article: Article;
  readonly toc: TocEntry[];
  readonly more: Article[];
  readonly id = headingId;
  readonly path = articlePath;

  constructor() {
    const slug = inject(ActivatedRoute).snapshot.data['slug'] as string;
    const found = ARTICLES.find((a) => a.slug === slug);
    if (!found) {
      inject(Router).navigateByUrl('/not-found');
    }
    this.article = found ?? ARTICLES[0];
    this.more = ARTICLES.filter((a) => a !== this.article);
    this.toc = this.article.blocks.flatMap((b) =>
      b.type === 'h2' || b.type === 'h3' ? [{ id: headingId(b.text), text: b.text, level: b.type === 'h2' ? 2 : 3 }] : [],
    );

    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
