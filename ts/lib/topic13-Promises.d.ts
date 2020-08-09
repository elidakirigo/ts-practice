/**
 * -----------------------------
 * using promises in typescript
 * -----------------------------
 */
declare const promise: Promise<unknown>;
declare const promise2: Promise<unknown>;
declare function iReturnPromiseAfter1Second(): Promise<string>;
declare function generator(): Generator<1 | 0, void, unknown>;
declare let iterator: Generator<1 | 0, void, unknown>;
declare function generators(): Generator<string, void, unknown>;
declare const iterators: Generator<1 | 0, void, unknown>;
declare const foo: IteratorResult<1 | 0, void>;
declare const nextThing: IteratorResult<1 | 0, void>;
