/**
 * 10未満の自然数のうち, 3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり, これらの合計は 23 になる.
 * 同じようにして, 1000 未満の 3 か 5 の倍数になっている数字の合計を求めよ.
 */
const main = (number) => {
    let num = 1;
    let sum = 0;
    while(num < number){
        if(num % 3 === 0 || num % 5 === 0){
            sum += num;
        }
        num++;
    }
    return sum;

}

const target = 1000;
console.log('答え：', main(target));