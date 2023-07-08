// --------------------------------------------------------------------------
// arrow function

{
  function run() {
    let price = currencyKR(2_107_000);
    console.log(price);
  }

  //  멀티라인이기 때문에 {} 블럭 감싸서 안에 넣어 받아줘야 함
  const currencyKR = (value: number): string => {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new Error("currencyKR 함수에는 숫자 값만 전달해야 합니다.");
    }
    let price = numberWithComma(value);
    return `${price}원`;
  };

  //  단일 객체일 경우 블럭{} 없이 바로 받을 수 있다
  const numberWithComma = (value: number): string =>
    value.toString().replace?.(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  run();
}
