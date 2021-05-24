/**
 * 素数を小さい方から6つ並べると 2, 3, 5, 7, 11, 13 であり, 6番目の素数は 13 である.
 * 10 001 番目の素数を求めよ.
 */
const main = (target) => {
  let num = 2;
  let index = 1;
  while (index <= target) {
    if (index === target && checkPrimeNum(num)) {
      return num;
    } else if (checkPrimeNum(num)) {
      index++;
    }
    num++;
  }
};

// 素数かチェック
const checkPrimeNum = (number) => {
  for (let n = 1; n <= number; n++) {
    if (number % n === 0 && n !== 1 && n !== number) {
      return false;
    }
  }
  return true;
};

const target = 10001;
console.log("答え：", main(target));
