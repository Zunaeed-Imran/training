// written by julius Bhai.
// in this file we practice 10 gorar namta in JS.





// 10 x 1
// 10 x 2
// 10 x 3
// 10 x 4
// 10 x 5
let sum = 0;
// for (let i = 1; i <= 5; i = i + 1) {
//     // sum += i * 10;
//     // sum = sum + i * 10;
//     // sum = sum + i * 10;
//     // 0 + 1 * 10 = 10
//     // 10 + 2 * 10 = 30
//     // 30 + 3 * 10 = 60
//     // 60 + 4 * 10 = 100
//     // 100 + 5 * 10 = 150
//     // console.log(i * 10);
// }

// for (let i = 10; i <= 50; i = i + 10) {
//     // sum += i;
//     // sum = sum + i;
//     // 0 + 10 = 10
//     // 10 + 20 = 30
//     // 30 + 30 = 60
//     // 60 + 40 = 100
//     // 100 + 50 = 150
//     // console.log(i);
// }

for (let i = 1; i <= 50; i = i + 1) {
    // sum += i;
    if (i % 10 == 0)
        sum = sum + i;
    // 10 % 10 = 0
    // 20 % 10 = 0
    // 30 % 10 = 0
    // 40 % 10 = 0
    // 50 % 10 = 0
    // console.log(i);
}