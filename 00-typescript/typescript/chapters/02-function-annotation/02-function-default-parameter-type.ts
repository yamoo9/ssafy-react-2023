// @ts-nocheck

// ---------------------------------------------------------------------------------
// 📌 함수 기본 매개변수와 타입(Function Default Parameter Type)
// ⭐️ URL : https://bit.ly/3Ux7XwT
// ---------------------------------------------------------------------------------
// - 함수의 매개변수에 타입을 지정하는 방법은 변수의 타입을 지정하는 것과 동일합니다.
// - 함수의 매개변수 기본 값은 '값'이므로 `:type` 뒤에서 할당됩니다.
// ---------------------------------------------------------------------------------

{
  const sendGreeting = (
    toName: string,
    fromName: string,
    isMorning: boolean,
    currentYear: number
  ) => {
    let thisTime = isMorning ? '오전' : '오후';
    return `안녕 ${toName}! 좋은 ${thisTime}이 되길 바라. 행복한 ${currentYear} 한 해가 되길! - 당신의 ${fromName}`;
  };

  // toName을 제외한 매개변수의 기본 값을 설정해 아래 오류가 발생하지 않도록 합니다.
  sendGreeting('상우');
  sendGreeting('제인');
}
