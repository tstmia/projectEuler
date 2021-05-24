/**
 * 左右どちらから読んでも同じ値になる数を回文数という. 2桁の数の積で表される回文数のうち, 最大のものは 9009 = 91 × 99 である.
 * では, 3桁の数の積で表される回文数の最大値を求めよ.
 */
const main = () => {
  let result = 0;
  const miniNum = 100;

  for (let num1 = 999; num1 >= miniNum; num1--) {
    for (let num2 = 999; num2 >= miniNum; num2--) {
      if (num1 * num2 > result && isKaibun(num1 * num2)) {
        result = num1 * num2;
      }
    }
  }
  return result;
};

const isKaibun = (num) => {
  const strNum = num.toString().split("");

  // 偶数桁の場合
  if (strNum.length % 2 === 0) {
    let n = strNum.length / 2;
    while (n >= 0) {
      if (strNum[n - 1] !== strNum[strNum.length - n]) {
        return false;
      }
      n--;
    }
    // 奇数桁の場合
  } else if (strNum.length % 2 === 1) {
    let n = (strNum.length - 1) / 2;
    while (n >= 0) {
      if (strNum[n - 1] !== strNum[strNum.length - n + 1]) {
        return false;
      }
      n--;
    }
  }
  return true;
};

console.log("答え；", main());
