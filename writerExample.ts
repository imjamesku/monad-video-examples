export {};
interface WithLogs<T> {
  value: T;
  logs: string[];
}

function unit<T>(x: T): WithLogs<T> {
  return {
    value: x,
    logs: []
  };
}

function flatMap<T, U>(w: WithLogs<T>, f: (x: T) => WithLogs<U>): WithLogs<U> {
  const result = f(w.value);
  return {
    value: result.value,
    logs: w.logs.concat(result.logs)
  };
}

function add2(n: number): WithLogs<number> {
  return {
    value: n + 2,
    logs: [`add2(${n})`]
  };
}

function mult3(n: number): WithLogs<number> {
  return {
    value: n * 3,
    logs: [`mult3(${n})`]
  };
}

function tell(log: string): WithLogs<undefined> {
  return {
    value: undefined,
    logs: [log]
  };
}

function example0(): WithLogs<number> {
  const initialValue = unit(1);
  const res1 = flatMap(initialValue, add2);
  const res2 = flatMap(res1, mult3);
  return res2;
}

function example(): WithLogs<number> {
  const initialValue = unit(1);
  const res1 = flatMap(initialValue, add2);
  const res2 = flatMap(res1, mult3);
  const res3 = flatMap(res2, (x) => {
    const someRandomLog = tell("hello world");
    return flatMap(someRandomLog, (_) => unit(x));
  });
  return res3;
}
// example written in do notation
// do function example(): Writer<number> {
//     const initialValue = 1;
//     const x = bind add2(initialValue);
//     const y = bind mult3(x);
//     tell("hello world");
//     return y;
// }

console.log(example());
