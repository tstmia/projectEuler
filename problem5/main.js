/**
 * 2520 は 1 から 10 の数字の全ての整数で割り切れる数字であり, そのような数字の中では最小の値である.
 * では, 1 から 20 までの整数全てで割り切れる数字の中で最小の正の数はいくらになるか.
 */
const main = () => {
  let number = 20;
  while (true) {
    if (checkResult(number)) {
      return number;
    }
    number++;
  }
};

// 1~20まで全てで割り切れるかチェック
const checkResult = (number) => {
  for (let num = 2; num <= 20; num++) {
    if (number % num !== 0) {
      return false;
    }
  }
  return true;
};

console.log("答え；", main());
