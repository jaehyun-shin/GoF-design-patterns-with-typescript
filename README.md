# 디자인 패턴이란

소프트웨어 설계 방법으로 개별 클래스의 기능(역할, 책임)을 명확히 정의하고, 여러 개의 클래스들 간의 관계를 효과적으로 잘 맺는 방법을 정리해 놓은 것.

**클래스 간 올바른 관계를 맺어야 하는 이유**

1. 클래스는 최소한의 단위 기능을 갖는다.
2. 큰 기능은 최소 단위 기능을 갖는 클래스들 간의 관계를 통해 개발된다.
3. 꼭 필요한 것들만으로 구성된 최적화된 소프트웨어 개발이 가능하다.
4. 문제 발생 시 원인 규명이 빠르다.
5. 최소한의 코드 수정으로 유지 보수가 가능하다.
6. 기존 기능에 영향을 주지 않고 새로운 기능 추가가 가능하다.

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

# 실습 환경

- Typescript
- Visual Studio Code
- Node.js
  - webpack, webpack-cli
  - typescript, ts-loader

## 실습 환경 구성

Branch 실습환경 참조
`npm start`
