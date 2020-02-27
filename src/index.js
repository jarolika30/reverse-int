module.exports = function reverse (n) {
    let reversed = n > 0 ?  n : Math.abs(n);
    return +((reversed + "").split("").reverse().join("")); 
}
