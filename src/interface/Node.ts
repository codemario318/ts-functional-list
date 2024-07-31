export interface Node<T> {
  readonly value: T,
  readonly next: Node<T>,
}
