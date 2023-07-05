// --------------------------------------------------------------------------
// rest parameters

{
  const sum = (firstNumber: number, ...restNumbers: number[]): number => {
    console.log(Array.isArray(restNumbers));

    // const numbers = Array.from(arguments); // 유사 배열 arguments (이터러블 프로토콜 => 이터레이터 프로토콜), for of 문
    return restNumbers.reduce((result, number) => result + number, firstNumber);
  };

  let result1 = sum(2, 3, 9, 12, 105);
  console.log(result1);

  let result2 = sum(90, 418, -7);
  console.log(result2);
}
