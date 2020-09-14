// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
// file path: /profile/index.js

// экспортируйте printProfile как именной export

export const printProfile = (profileData) => {
  console.log("implementation for printProfile");
  const { name, company } = profileData;
  console.log(`${name} from ${company}`);
};
