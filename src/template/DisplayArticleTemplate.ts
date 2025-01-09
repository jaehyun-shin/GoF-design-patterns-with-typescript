import Article from "./Article";

export default abstract class DisplayArticleTemplate {
  constructor(protected article: Article) {}

  // readonly로 파생 클래스에서 오버라이드할 수 없도록 함
  public readonly displayHtml = () => {
    // 호출 순서를 정의하는 템플릿 메서드
    return `
      ${this.title()}
      ${this.content()}
      ${this.footer()}
    `;
  };

  protected abstract title(): string;
  protected abstract content(): string;
  protected abstract footer(): string;
}
