// 2.1
var age;
age = 50;
var nameUser;
nameUser = "Max";
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) {
    return 100 + a;
};
// 2.2
var anything;
anything = -20;
anything = "Text";
anything = {};
// 2.3
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// 2.4
var person;
person = ["Max", 21];
// 2.5
var LoadStatus;
(function (LoadStatus) {
    LoadStatus[LoadStatus["LOADING"] = 0] = "LOADING";
    LoadStatus[LoadStatus["READY"] = 1] = "READY";
})(LoadStatus || (LoadStatus = {}));
var load = {
    status: LoadStatus.LOADING
};
if (load.status === LoadStatus.LOADING) {
    console.log("Loading");
}
else {
    console.log("Ready");
}
// 2.6
var union;
union = 5;
union = "how are you?";
// 2.7
var literalStr;
// 2.8
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date(),
        updateAt: new Date()
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "closed"
};
