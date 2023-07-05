// @ts-nocheck

// --------------------------------------------------------------------------
// 📌 빌트인 제네릭 (Built-in Generics)
// ⭐️ URL : https://bit.ly/3hCmGYC
// --------------------------------------------------------------------------
// - TypeScript에는 이미 내장된 제네릭이 있습니다.
// - DOM 요소를 선택하는 querySelector API를 통해 살펴봅니다.
// - TypeScript가 추론할 수 없는 타입은 사용자가 명시적으로 알려줘야 합니다.
// --------------------------------------------------------------------------

{
  // 내장된(built-in) 제네릭 타입
  // ParentNode.querySelector<keyof HTMLElementTagNameMap>(selectors: keyof HTMLElementTagNameMap): Element | null

  // TypeScript → DOM 요소 타입 추론
  // - 익스클레메이션(Exclamation)
  // - 타입 단언(Type Assertion)
  // - 제네릭(Generic)
  const inputEl = document.querySelector('#username');

  // 🧐 TypeScript ...
  // - inputEl 변수 참조는 null일 가능성이 있습니다.
  // - Element 타입은 value 속성이 포함되어 있지 않습니다.
  console.log(inputEl.value);

  const buttonEl = document.querySelector('.button');
  console.log(buttonEl.type);
}
