# 디자인 패턴이란

소프트웨어 설계 방법으로 개별 클래스의 기능(역할, 책임)을 명확히 정의하고, 여러 개의 클래스들 간의 관계를 효과적으로 잘 맺는 방법을 정리해 놓은 것.

**클래스 간 올바른 관계를 맺어야 하는 이유**

1. 클래스는 최소한의 단위 기능을 갖는다.
2. 큰 기능은 최소 단위 기능을 갖는 클래스들 간의 관계를 통해 개발된다.
3. 꼭 필요한 것들만으로 구성된 최적화된 소프트웨어 개발이 가능하다.
4. 문제 발생 시 원인 규명이 빠르다.
5. 최소한의 코드 수정으로 유지 보수가 가능하다.
6. 기존 기능에 영향을 주지 않고 새로운 기능 추가가 가능하다.

---

# GOF Design Pattern

가장 유용하면서 대표적인 소프트웨어 디자인 패턴 저서.

4명의 선배 개발자가 체계적으로 정리해 놓은 설계 방법으로 총 23개의 패턴으로 구성되며, 생성 패턴(5개), 구조 패턴(7개), 행위 패턴 (11개)로 분류한다.

| 생성             | 구조      | 행위                    |
| ---------------- | --------- | ----------------------- |
| Factory Method   | Adapter   | Interpreter             |
| Abstract Factory | Bridge    | Template Method         |
| Builder          | Composite | Chain of Responsibility |
| Prototype        | Decorator | Command                 |
| Singleton        | Facade    | Iterator                |
|                  | Flyweight | Mediator                |
|                  | Proxy     | Memento                 |
|                  |           | Observer                |
|                  |           | Strategy                |
|                  |           | Visitor                 |

---

# 실습 환경

- Typescript
- Visual Studio Code
- Node.js
  - webpack, webpack-cli
  - typescript, ts-loader

---

## 실습 환경 구성

Branch 실습환경 참조

`npm start`

---

## Iterator (반복자)

순회가능한 객체를 반복하는 패턴

### Aggregator(또는 Container)

동일의 형태의 데이터 항목을 여러개 갖고 있는 것을 Aggregator또는 Container라고 한다.

### **Aggregator 종류**

- Array
- Linked List
- Tree
- Graph
- Table(DBMS)
- 기타 등등

Aggregator의 구성 데이터를 가져와야할 때 Aggregator의 종류에 따라서 그 방법이 다르다. 내부 자료구조와 종류가 모두 다르기 때문이다.

### 개념

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/eacaa6e9-3a40-4708-ad5c-bba8793d30da/2b55df5a-aff0-4ba2-88e1-bb2e438f1d97/image.png)

- Iterator 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는 Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수있다.
- 데이터 구조가 다른 Aggregator일지라도 구성 항목을 표준화 된 공통 API로 접근할 수 있어, 하나의 공통된 알고리즘으로 처리할 수 있다.
- 기존 Javascript의 배열, 문자열등이 Iterator protocol을 통해 구현 되어있다.

---
