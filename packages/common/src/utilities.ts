
/**
 * This utility function is used to assert that a switch statement is exhaustive.
 * This has the added benefit of throwing an error if the enum is extended and
 * the switch statement is not updated.
 *
 * @example
 * enum Foo {
 *   A = "a",
 *   B = "b",
 * };
 * const foo: Foo = Foo.A;
 *
 * switch (foo) {
 *   case Foo.A:
 *     // Do something
 *     break;
 *   case Foo.B:
 *     // Do something else
 *     break;
 *   default:
 *     assertUnreached(foo);
 * }
 */
export const assertUnreached = (obj: never): never => {
  throw new Error(`Unreached case: ${obj}`);
}

/**
 * An assertion that the given value is not undefined. This helps with Typescript's
 * type inference during development.
 */
export function isDefined<T>(val: T | undefined): val is T {
  return val !== undefined;
}
