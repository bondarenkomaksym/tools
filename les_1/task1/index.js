// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
//await работает ТОЛЬКО внутри асинхронной функции

//с помощью оператора async заворачиваем функцию в промис
// async function func() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("async in promise after one second");
//     }, 1000);
//   });
//   //await ждёт пока выполнится его промис, при этом весь остальной код выполняется
//   const result = await promise;
//   console.log(result);
//   console.log("code after async");
//   return 1;
// }

// const result = func();
// console.log("sync code");

export const fetchUser = async (userId) => {
  try {
    //await ждёт выполнения промиса и кладёт его ЗНАЧЕНИЕ в переменную
    const response = await fetch(`https://api.github.com/users/${userId}`);
    console.log(response);
    if (!response.ok) {
      return null;
    }
    //response.json() тоже асинхр операция
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};
fetchUser("github");
