// --------------------------------------------------------------------------
// 📌 제네릭 기본 타입 (Generic Defaut Types)
// ⭐️ URL : https://bit.ly/3NZ5xod
// --------------------------------------------------------------------------
// - 제네릭 또한 기본 타입을 설정할 수 있습니다.
// --------------------------------------------------------------------------

{
  function makeRepeatArray<T>(thing?: T, repeatCount: number = 2): T[] {
    return Array(repeatCount).fill(thing);
  }

  const numberList = makeRepeatArray(101);
  const stringList = makeRepeatArray('works');
  const arrayList = makeRepeatArray([true, () => {}]);

  // 아무런 데이터가 전달되지 않아도 기본 타입이 설정되도록 제네릭 기본 타입을 설정합니다.
  const unknownList = makeRepeatArray();
}
