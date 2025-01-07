import Iterator from "./iterator";

interface Aggregator<T> {
  iterator(): Iterator<T>; // Aggregator 인터페이스는 iterator() 메서드를 가지고 있다. 이 메서드는 Iterator 인터페이스를 생성해서 반환한다.
}

export default Aggregator;
