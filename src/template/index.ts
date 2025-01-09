import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";

const article = new Article(
  "GoF 디자인 패턴",
  [
    "GoF 디자인 패턴은 23가지 디자인 패턴을 정리한 책입니다.",
    "디자인 패턴은 소프트웨어 설계에서 자주 발생하는 문제를 해결하기 위한 해결책을 제시합니다.",
    "GoF 디자인 패턴은 생성 패턴, 구조 패턴, 행동 패턴으로 나뉩니다.",
  ],
  "신재현"
);

const display = new SimpleDisplayArticle(article);
document.querySelector(".content").innerHTML = display.displayHtml();

document.querySelector(".edit-mode").addEventListener("change", (e) => {
  let display;

  if ((<HTMLInputElement>e.target).checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }

  document.querySelector(".content").innerHTML = display.displayHtml();
});
