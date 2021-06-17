/**
 * 10以下の素数の和は 2 + 3 + 5 + 7 = 17 である.
 * 200万以下の全ての素数の和を求めよ.
 */
const main = (target) => {
  let num = Math.floor(target / 6) + 1;
  let sum = 2 + 3;
  for (let n = 1; n <= num; n++) {
    if (checkPrimeNum(6 * n - 1) && 6 * n - 1 <= target) {
      sum += 6 * n - 1;
    }
    if (checkPrimeNum(6 * n + 1)&& 6 * n - 1 <= target) {
      sum += 6 * n + 1;
    }
  }
  return sum;
};

const checkPrimeNum = (number) => {
  for (let n = 1; n <= number; n++) {
    if (number % n === 0 && n !== 1 && n !== number) {
      return false;
    }
  }
  return true;
};

const target = 2000000;
console.log("答え：", main(target));
