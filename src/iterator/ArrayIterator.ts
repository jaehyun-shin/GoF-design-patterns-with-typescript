import Iterator from "./iterator";
import Item from "./Item";
import Array from "./Array";

class ArrayIterator implements Iterator<Item> {
  private index: number;

  constructor(private array: Array) {
    this.index = -1;
  }

  public next(): boolean {
    this.index++;
    return this.index < this.array.count;
  }

  public current(): Item {
    return this.array.getItem(this.index);
  }
}

export default ArrayIterator;
