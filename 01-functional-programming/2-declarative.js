// --------------------------------------------------------------------------
// 📌 [선언형(Declarative)]
// --------------------------------------------------------------------------
// - 무엇을(WHAT)에 중점을 두고 작성, 작업 실행 순서를 설명하지 않습니다.
// --------------------------------------------------------------------------

const originalValue = [
  { name: '명령형 프로그래밍' },
  { name: '선언형 프로그래밍' },
];

const expectedValue = [
  {
    key: 'programming-1',
    name: '명령형 프로그래밍',
  },
  {
    key: 'programming-2',
    name: '선언형 프로그래밍',
  },
];

function run() {
  let receivedValue;

  // 선언형 코드를 여기에 작성합니다.

  return receivedValue;
}

const receivedValue = run();

const [receivedFirstItem] = receivedValue;
const [expectedfirstItem] = expectedValue;

console.assert(
  Object.is(receivedFirstItem.key, expectedfirstItem.key),
  '⚠️ receivedFirstItem와 expectedfirstItem의 key 값이 다릅니다.'
);
