Promise - class
const promise = new Promise(executor)

const executor = (resolve, reject) => {
    setTimeout(() => {
        if (condition) {
            resolve("Success!");
        } else {
            reject("Error!");
        }
    }, 500);
}

cnst onResolve = (res) => {...}
const onReject = (err) => new Error()
const onSettled = () => {...}

      pending => fulfilled (success)|| rejected (error)
new Promise() => .then(onResolve, onReject).finally(onSettled)
                        ||
new Promise() => .then(onResolve).catch(onReject).finally(onSettled)


PROMISSIFICATION

const mySimplyFunc = (onSuccess, onError, ...args) => {
    setTimeout(() => {
        if (condition) {
            onSuccess("success");
        } else {
            onError("error");
        }
    }, 500);
};
mySimplyFunc(() => {}, () => {}, "value1", ..., "valueN")

||
||

const myPromisesFunc = (...args) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve("success");
      } else {
        reject("error");
      }
    }, 500);
  });
};

myPromisesFunc("value1", ..., "valueN").then().catch()

STATIC METHODS of PROMISE

Promise.all([promise1, ..., promiseN]) => promise.then((res) => res == [...values])
Promise.race() - 
Promise.resolve() -
Promise.reject() -