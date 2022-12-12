// 2.1
let age: number;
age = 50;
let nameUser: string;
nameUser = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};
// 2.2
let anything: any;
anything = -20;
anything = "Text";
anything = {};
// 2.3
let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}
