import { Node } from './Node';

export interface List<T> {
  readonly head: Node<T>;
  at(index: number): Node<T>;
  find(callback: CompareFunction<T>): Node<T>;
  some(callback: CompareFunction<T>): Boolean;
  forEach(callback: EachFunction<T>): void;
  map<U>(callback: MapFunction<T, U>): List<U>;
  filter(callback: CompareFunction<T>): List<T>;
}

type EachFunction<T> = (item: T) => any;
type MapFunction<T, U> = (item: T) => U;
type CompareFunction<T> = (item: T) => boolean;