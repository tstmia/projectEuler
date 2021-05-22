/**
 * 13195 の素因数は 5, 7, 13, 29 である.
 * 600851475143 の素因数のうち最大のものを求めよ.
 */
const main = (target) => {
  let num = 2;
  const primeNums = [];

  // targetが１になるまで素数で割っていく
  while (target > 1) {
    while (target % num == 0) {
      primeNums.push(num);
      target /= num;
    }
    num++;
  }
  console.log("素因数", primeNums);

  // 大きい順に並べる
  primeNums.sort((a, b) => b - a);
  return primeNums[0];
};

let target = 600851475143;
console.log("答え；", main(target));
