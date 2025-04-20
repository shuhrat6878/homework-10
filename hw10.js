// function qisqartirish(str) {
//   const sozlar = str.split(" ");
//   const natija = sozlar.map(soz => {
//     if (soz.length >= 3) {
//       return soz[0] + (soz.length - 1) + soz[soz.length - 1];
//     } else {
//       return soz;
//     }
//   });
//   return natija.join(" ");
// }

// const input = "Every developer likes to mix kubernetes and javascript";
// const input2 = "Assalomu aleykum azizlar";


// console.log(qisqartirish(input));
// console.log(qisqartirish(input2));


// 8888888888888

// const scores = new Map([
//   ["A", 100],
//   ["B", 14],
//   ["C", 9],
//   ["D", 28],
//   ["E", 145],
//   ["F", 12],
//   ["G", 3],
//   ["H", 10],
//   ["I", 200],
//   ["J", 100],
//   ["K", 114],
//   ["L", 100],
//   ["M", 25],
//   ["N", 450],
//   ["O", 80],
//   ["P", 2],
//   ["Q", 12],
//   ["R", 400],
//   ["S", 113],
//   ["T", 405],
//   ["U", 11],
//   ["V", 10],
//   ["W", 10],
//   ["X", 3],
//   ["Y", 210],
//   ["Z", 23],
// ]);

// function isimBal(ism) {
//   ism = ism.toUpperCase();
//   let ball = 0;

//   for (let i = 0; i < ism.length; i++) {
//     const harf = ism[i];
//     if (scores.has(harf)) {
//       ball += scores.get(harf);
//     }
//   }

//   if (ball <= 60) {
//     return "NOT TOO GOOD";
//   } else if (ball <= 300) {
//     return "VERY GOOD";
//   } else if (ball <= 599) {
//     return "PRETTY GOOD";
//   } else {
//     return "THE BEST";
//   }
// }

// console.log(isimBal("mubashir"));
// console.log(isimBal("ali"));
// console.log(isimBal("sarvar"));
// console.log(isimBal("shuxrat"));

