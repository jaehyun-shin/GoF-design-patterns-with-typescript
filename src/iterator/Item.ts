class Item {
  private _name: string;
  private _cost: number;

  // 생성자를 통해 이름과 가격을 초기화한다.
  constructor(name: string, cost: number) {
    this._name = name;
    this._cost = cost;
  }

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }
}

export default Item;
