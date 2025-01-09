interface Iterator<T> {
  // next()는 Iterator 인터페이스를 통해 Aggregator의 다음 구성 요소를 얻을 수 있도록 하고
  // 다음 구성 데이터를 얻을 수 있다면 true를 얻을 수 없다면 false를 반환한다.
  next(): boolean;
  // current()는 현재 구성 요소를 반환한다. 어떠한 타입이든 사용할 수 있도록 제너릭으로 선언하고 이름을 T로 지정했다
  current(): T;
}

// 이 Iterator는 다른 소스 파일에서도 사용할 수 있도록 export 한다.
export default Iterator;
