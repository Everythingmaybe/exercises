// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 100);
//     })(i)
// }

// for (var i = 0; i < 10; i++) {
//     setTimeout(function (i) {
//         console.log(i);
//     }.bind(this, i), 100);
// }

for (var i = 0; i < 10; i++) {
    setTimeout(function (i) {
        console.log(i);
    }, 100, i);
}

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }
