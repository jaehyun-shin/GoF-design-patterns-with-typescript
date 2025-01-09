import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class EditableDisplayArticle extends DisplayArticleTemplate {
  protected title(): string {
    return `<div><span>제목</span><input value='${this.article.getTitle()}'/></div>`;
  }
  protected content(): string {
    return `<span>내용</span><br/><textarea cols='50' rows='5'>${this.article.getContent()}</textarea>`;
  }
  protected footer(): string {
    return `<div><span>글쓴이</span><input value='${this.article.getFooter()}'/></div>`;
  }
  constructor(article: Article) {
    super(article);
  }
}
