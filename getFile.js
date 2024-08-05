// import { readFile } from 'fs';
//
// function getFile(path) {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) reject(err);
//             resolve(data);
//         })
//     })
// }


const a = {
    f: 'fff',
    get() {
        return this.f
    },
    get1() {
        const t = () => this.f;
        return t();
    },
}

console.log(a.get());
console.log(a.get1());
