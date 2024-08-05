const first = [1,2,3,1] // 4
const second = [5,2,4,6] // 11
const third = [2,7,9,3,1,6] // 17

function rob(houses) {
    if (houses.length === 0) return 0;
    if (houses.length === 1) return houses[0];

    const dp = Array(houses.length);
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);

    for(let i = 2; i < houses.length; i++){
        dp[i] = Math.max(houses[i] + dp[i - 2], dp[i - 1]);
    }

    return dp.at(-1)
}


console.log(rob(first));
console.log(rob(second));
console.log(rob(third));
