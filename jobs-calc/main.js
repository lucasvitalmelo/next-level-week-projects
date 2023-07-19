const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("não aceito isso");
  }, 3000);
});

async function test() {
  return [await promise, await promise, await promise];
}
const res = test().then(function (value) {
  console.log(value)
  
  return value;
});
console.log(res);
