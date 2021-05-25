/**
 * 2**15 = 32768 であり, 各位の数字の和は 3 + 2 + 7 + 6 + 8 = 26 となる.
 * 同様にして, 21000 の各位の数字の和を求めよ.
 */
const main = () => {
  let sum = 0;
  const number = 2 ** 1000;
  let strNums = number.toString().split("");
  for (let num of strNums) {
    if (parseInt(num)) {
      sum += parseInt(num);
    }
  }
  return sum;
};

console.log("答え：", main());
