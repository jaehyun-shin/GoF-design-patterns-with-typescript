import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
  protected title(): string {
    return `<h1>${this.article.getTitle()}</h1>`;
  }
  protected content(): string {
    const items = this.article.getContent().map((item) => `<li>${item}</li>`);
    return `<ul>${items.join("")}</ul>`;
  }
  protected footer(): string {
    return `<h3>${this.article.getFooter()}</h3>`;
  }
  constructor(article: Article) {
    super(article);
  }
}
