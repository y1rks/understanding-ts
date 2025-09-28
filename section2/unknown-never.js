"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { messsage: message, errorCode: code };
}
const result = generateError("エラーが発生しました", 500);
console.log(result);
//# sourceMappingURL=unknown-never.js.map