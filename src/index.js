import('./t');
import('./n');
let aaa = 1;
const promise = new Promise(function(resolve, reject) {
  // ... some code
  resolve({name: 1})
});
console.log(aaa);
console.log(Object.values({ 1: 2 }));