export const dice = (n: number, d: number) => {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += Math.floor(Math.random() * d) + 1;
    }
    return result;
}
