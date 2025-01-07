import SumStrategy from "./SumStrategy";

export default class GausSumStrategy implements SumStrategy {
  get(N: number): number {
    return (N * (N + 1)) / 2;
  }
}
