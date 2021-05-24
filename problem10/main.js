/**
 * 10以下の素数の和は 2 + 3 + 5 + 7 = 17 である.
 * 200万以下の全ての素数の和を求めよ.
 */
const main = (target) => {
  let sum = 2;
  for (let num = 3; num <= target; num+=2) {
    console.log(num)
    if (checkPrimeNum(num)) {
      sum += num;
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
// 142913828922
