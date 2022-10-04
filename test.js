
function f(n) {
    const r = [];
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) continue;
        let j = 0;

        while ( j < r.length && i % r[j] !== 0) {
            console.log(i,j < r.length, i % r[j]);
            j++;
        }
        if (j === r.length) {
            r.push(i);
        }
    }
    return r;
}