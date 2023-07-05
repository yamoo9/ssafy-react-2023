// --------------------------------------------------------------------------
// 📌 [불변(Immutable) - 함수형 프로그래밍]
// --------------------------------------------------------------------------
// - 불변 데이터(immutable data)는 생성 이후 변경할 수 없는 데이터를 말합니다.
// --------------------------------------------------------------------------

const initialValue = [
  { title: '불변 데이터 관리', created: 1687488860400 },
  { title: '생성 이후 변경할 수 없는 데이터', created: 1687488792532 },
  { title: '변하지 않는 변수', created: 1687488811960 },
];

const expectedValue = [
  { title: '생성 이후 변경할 수 없는 데이터', created: 1687488792532 },
  { title: '변하지 않는 변수', created: 1687488811960 },
  { title: '불변 데이터 관리', created: 1687488860400 },
];

function sortBy(data, key) {
  const sortKey = key[0] === '-' ? -1 : 1;
  key = key.replace(/^-/, '');

  // [불변 데이터 관리]
  // 원본 데이터를 변형하지 않고, 불변 데이터로 관리하는 코드를 작성합니다.
  return data.sort((dataX, dataY) => {
    const x = dataX[key];
    const y = dataY[key];

    if (typeof x === 'number') {
      return sortKey > 0 ? x - y : y - x;
    } else {
      return x > y ? 1 * sortKey : x < y ? -1 * sortKey : 0;
    }
  });
}

const receivedValue = sortBy(initialValue, 'created');

const [initialFirstItem] = initialValue;
const [receivedFirstItem] = receivedValue;
const [expectedfirstItem] = expectedValue;

console.assert(
  Object.is(receivedFirstItem.created, expectedfirstItem.created),
  '⚠️ receivedFirstItem 생성 날짜와 expectedfirstItem 생성 날짜가 다릅니다.'
);

console.assert(
  !Object.is(receivedFirstItem, initialFirstItem),
  '⚠️ receivedValue와 initialValue는 동일 객체입니다.'
);
