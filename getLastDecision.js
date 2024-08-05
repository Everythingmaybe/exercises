const decisions1 = [
    { id: 1, result: 'approved' },
    { id: 3, result: 'approved' },
    { id: 15, result: 'approved' },
    { id: 20, result: 'waiting' },
    { id: 26, result: 'waiting' },
    { id: 30, result: 'approved' },
]

const decisions2 = [
    { id: 2, result: 'approved' },
    { id: 4, result: 'approved' },
    { id: 14, result: 'approved' },
    { id: 16, result: 'waiting' },
    { id: 23, result: 'waiting' },
    { id: 32, result: 'approved' },
]

const getLastDecision = (decision1, decision2, k) => {
    let i = decision1.length - 1;
    let j = decision2.length - 1;
    const result = [];

    while (k && (i > -1 || j > -1)) {
        if ((decision1[i]?.id ?? 0) > (decision2[j]?.id ?? 0)) {
            result.push(decision1[i]);
            i--;
        } else {
            result.push(decision2[j]);
            j--;
        }
        k--;
    }

    return result;
}

console.log(getLastDecision(decisions1, decisions2, 5)); // 32 30 26 23 20
