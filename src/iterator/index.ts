import Array from "./Array";
import Item from "./Item";

const items = [
  new Item("책", 1000),
  new Item("음료수", 2000),
  new Item("간식", 500),
  new Item("화장품", 4000),
];

const array = new Array(items);
const iter = array.iterator();

while (iter.next()) {
  const item = iter.current();

  const domItem = document.createElement("div");
  domItem.innerText = `${item.name} : ${item.cost}원`;
  document.body.appendChild(domItem);

  domItem.classList.add("iterator-item");
}
