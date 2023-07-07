// --------------------------------------------------------------------------
// 📌 [명령형(Imperative)]
// --------------------------------------------------------------------------
// - 어떻게(HOW)에 중점을 두고, 작업 실행 순서를 나타냅니다.
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
  const receivedValue = [...originalValue]; // 배열 복사 (원본 변형하지 않음)

  // 명령형 코드를 여기에 작성합니다.
  for (let i = 0, l = receivedValue.length; i < l; ++i) {
    const receivedItem = receivedValue[i];
    receivedItem.key = `programming-${i + 1}`;
  }

  return receivedValue;
}

const receivedValue = run();

const [receivedFirstItem] = receivedValue;
const [expectedfirstItem] = expectedValue;

console.assert(
  Object.is(receivedFirstItem.key, expectedfirstItem.key),
  '⚠️ receivedFirstItem와 expectedfirstItem의 key 값이 다릅니다.'
);
