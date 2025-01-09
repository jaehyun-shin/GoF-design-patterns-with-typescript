import Aggregator from "./Aggregator";
import ArrayIterator from "./ArrayIterator";
import Item from "./Item";
import Iterator from "./iterator";

class Array implements Aggregator<Item> {
  constructor(private items: Item[]) {}

  public getItem(index: number): Item {
    return this.items[index];
  }

  public get count(): number {
    return this.items.length;
  }

  iterator(): Iterator<Item> {
    return new ArrayIterator(this); // 이 this는 Array 클래스의 객체이다.
  }
}

export default Array;
