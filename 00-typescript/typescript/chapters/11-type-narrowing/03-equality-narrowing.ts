// --------------------------------------------------------------------------
// 📌 동일 여부 가드 (Equality Narrowing)
// ⭐️ URL : https://bit.ly/3fVA3CZ
// --------------------------------------------------------------------------
// - 동일 타입 가드는 특정 작업을 수행하기 전 타입을 서로 비교하는 것을 말합니다.
// - 두 값을 서로 비교해 검사하면 두 값이 동일한 지 확인 후 작업을 처리합니다.
// --------------------------------------------------------------------------

{
  function isEqualityValue(
    value1: string | number,
    value2: string | boolean
  ): boolean {
    if (value1 === value2) {
      // value1, value2 모두 string 타입
      console.log(value1.toLowerCase());
      console.log(value2.toLowerCase());
      return true;
    } else {
      // value1은 string 또는 number 타입
      // value2는 string 또는 boolean 타입
      console.log(value1);
      console.log(value2);
      return false;
    }
  }

  isEqualityValue(101, '101');
  isEqualityValue('EQUALITY', 'EQUALITY');
}
