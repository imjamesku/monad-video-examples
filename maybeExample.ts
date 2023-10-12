class Maybe<T> {
  private value: T | null;

  private constructor(value: T | null) {
    this.value = value;
  }

  // Static factory method to create a Maybe instance
  static just<T>(value: T): Maybe<T> {
    return new Maybe(value);
  }

  // Static factory method for an empty Maybe instance
  static nothing<T>(): Maybe<T> {
    return new Maybe<T>(null);
  }

  // Apply a function to the value inside Maybe and return a new Maybe
  map<U>(fn: (value: T) => U): Maybe<U> {
    if (this.value === null) {
      return Maybe.nothing();
    } else {
      return Maybe.just(fn(this.value));
    }
  }

  flatMap<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    if (this.value === null) {
      return Maybe.nothing();
    } else {
      return fn(this.value);
    }
  }
}

function trySomething1(): Maybe<number> {
  return Maybe.just(1);
}

function trySomething2(): Maybe<number> {
  return Maybe.nothing();
}

function ex1() {
  const res = trySomething1().flatMap((x) =>
    trySomething2().flatMap((y) => Maybe.just(x + y))
  );
}

// do function imaginaryDoNotation(): Maybe<number> {
//   const x = bind trySomething1(); // Maybe<number>
//   const y = bind trySomething2(); // Maybe<number>
//   return x + y;
// }
