// let somePromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('hey it worked!');
//         reject('Unable to fulfill promise!');
//     },2500);
// });
//
// somePromise.then((message)=>{
//    console.log('Success : ',message);
// },(errorMessage)=>{
//     console.log('Error : ',errorMessage);
// });
let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Argument must be numbers!');
            }
        }, 3000);
    });
};

asyncAdd("17", 4).then((res) => {
    console.log('Result : ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Should be 54 :', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});