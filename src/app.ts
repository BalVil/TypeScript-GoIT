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
// 2.4
let person: [string, number];
person = ["Max", 21];
// 2.5
enum LoadStatus {
  LOADING,
  READY,
}
const load = {
  status: LoadStatus.LOADING,
};
if (load.status === LoadStatus.LOADING) {
  console.log("Loading");
} else {
  console.log("Ready");
}
// 2.6
let union: string | number;
union = 5;
union = "how are you?";
// 2.7
let literalStr: "enable" | "disable";
// 2.8
function showMessage(message: string): void {
  console.log(message);
}
function calc(num1: number, num2: number): number {
  return num1 + num2;
}
function customError(): never {
  throw new Error("Error");
}
// 2.9
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "closed";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date(),
    updateAt: new Date(),
  },
};
const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "closed",
};
