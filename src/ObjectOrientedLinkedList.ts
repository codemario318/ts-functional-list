import {List} from "./interface/List";
import { Node } from "./interface/Node";

export class ObjectOrientedLinkedList<T> implements List<T> {
    push(node: Node<T>): void {
        throw new Error("Method not implemented.");
    }
    delete(index: number): void {
        throw new Error("Method not implemented.");
    }
    at(index: number): Node<T> {
        throw new Error("Method not implemented.");
    }
    find(callback: (item: T) => boolean): Node<T> {
        throw new Error("Method not implemented.");
    }
    some(callback: (item: T) => boolean): Boolean {
        throw new Error("Method not implemented.");
    }
    forEach(callback: (item: T) => any): void {
        throw new Error("Method not implemented.");
    }
    map<U>(callback: (item: T) => U): List<U> {
        throw new Error("Method not implemented.");
    }
    filter(callback: (item: T) => boolean): List<T> {
        throw new Error("Method not implemented.");
    }
}