// --------------------------------------------------------------------------
// arrow function

function run() {
  let price = currencyKR(2_107_000);
  console.log(price);
}

function currencyKR(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error('currencyKR 함수에는 숫자 값만 전달해야 합니다.');
  }
  let price = numberWithComma(value);
  return `${price}원`;
}

function numberWithComma(value) {
  return value.toString().replace?.(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

run();
