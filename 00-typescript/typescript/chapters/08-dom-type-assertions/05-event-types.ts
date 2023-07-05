// @ts-nocheck

// ------------------------------------------------------------------------------
// 📌 이벤트 + 타입 (Event with Types)
// ⭐️ URL : https://bit.ly/3O2cDYS
// ------------------------------------------------------------------------------
// - DOM 요소에 연결된 이벤트 핸들러의 이벤트 객체 타입을 명시적으로 지정하는 것이 권장됩니다.
// ------------------------------------------------------------------------------

// 이벤트 객체가 암묵적으로 any 타입으로 인식됩니다.
// TypeScript가 정확히 어떤 이벤트 객체 임을 알 수 있도록 타입을 지정해봅니다.

{
  const body = document.querySelector('body')!;
  const input = body.querySelector('input')!;

  const handleClickBody = (e) => {
    console.log(e.target);
  };

  body.addEventListener('click', handleClickBody);

  const handleInput = (e) => {
    let value = e.target.value;
    console.log(value);
  };

  input.addEventListener('input', handleInput);
}
