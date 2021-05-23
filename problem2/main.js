/**
 * フィボナッチ数列の項は前の2つの項の和である. 最初の2項を 1, 2 とすれば, 最初の10項は以下の通りである.
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 数列の項の値が400万以下のとき, 値が偶数の項の総和を求めよ.
 */
const main = () => {
  const fibNums = [1, 2];
  let result = 2;
  let index = 2;
  while (fibNums[index - 1] < 4000000) {
    const fibNum = fibNums[index - 1] + fibNums[index - 2];
    if (fibNum % 2 === 0 && fibNum < 4000000) {
      result += fibNum;
    }
    fibNums.push(fibNum);
    index++;
  }
  return result;
};

console.log("答え；", main());
