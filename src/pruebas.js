let random = Math.floor(Math.random()* arr.length);
let arrayEmpty = arr.length === 0;
let oneElementArray = arr.length === 1;
if(arrayEmpty) return undefined;
else if(oneElementArray) return arr[0];
else return arr[random];