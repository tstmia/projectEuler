/**
 * 
 * 驚くべきことに, 各桁を4乗した和が元の数と一致する数は3つしかない。
 * 1634 = 1 ^ 4 + 6 ^ 4 + 3 ^ 4 + 4 ^ 4
 * 8208 = 8 ^ 4 + 2 ^ 4 + 0 ^ 4 + 8 ^ 4
 * 9474 = 9 ^ 4 + 4 ^ 4 + 7 ^ 4 + 4 ^ 4
 * ただし、1 = 1 ^ 4 は含まないものとする。
 * この数たちの和は 1634 + 8208 + 9474 = 19316 である。
 * 各桁を 5 乗した和が元の数と一致するような数の総和を求めよ。
 */
const main = () => {
    maxDigit = getMaxDigit();
    let maxNumber = 9**5 * maxDigit;
    let sum = 0;
    while ( maxNumber > 1 ) {

        // 各桁を 5 乗した和を算出
        let sumDigitNums = 0;
        let digit = 1;
        while ( digit <= maxDigit ) {
            sumDigitNums += (Math.floor(maxNumber / 10**(digit-1)) % 10) ** 5;
            digit++;
        }

        //元の数と一致するような数の場合のみ加算
        if(maxNumber === sumDigitNums){
            sum += maxNumber;
        }
        maxNumber--;
        
    }
    return sum;
}

/**
 * 条件を満たしうる最大桁数を取得
 * @returns 
 */
const getMaxDigit = () => {
    let digit = 1;
    const digits = [];
    while ( 10**(digit-1) <= 9**5 * digit ) {
        digits.push(digit);
        digit++;
    }
    return digits[digits.length-1];
}


console.log("答え：", main());