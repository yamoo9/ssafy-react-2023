'use strict';
// --------------------------------------------------------------------------
// 📌 [TypeScript → ECMAScript(JavaScript)]
// --------------------------------------------------------------------------
// - TypeScript는 타입 시스템을 사용할 수 있는 ECMAScript(JavaScript)입니다.
// - ECMAScript(JavaScript)는 2015년 이후 매년 업데이트 됩니다.
// - ECMAScript 2015(v6) → ECMAScript 2023(v14)
// --------------------------------------------------------------------------
// 01. let, const
// 02. template literal
// 03. operators (nullish, optional chaining)
// 04. spread syntax
// 05. destructuring assignment
// 06. arrow function
// 07. default parameters
// 08. rest parameters
// 09. iterable / iterator
// 10. generator function
// 11. promise & async - await
// 12. ES Modules
// 13. class

// console.log('es module');

import createRoot, {
  shuffle,
  createElement as h /* hyperscript */,
} from './12-es-modules.js';

// console.log(EsModules.shuffle([1, 2, 3, 4, 5]));
// console.log(EsModules.numberWithComma(9_800_456));

function demo1() {
  const originalArray = [2, 4, 65, 23];
  const createdArray = shuffle(originalArray);

  console.assert(
    !Object.is(originalArray, createdArray),
    '🔴 originalArray와 createdArray는 동일한 객체입니다.'
  );
}

function demo2() {
  const strongElement = h('strong', {}, 'Virtual');

  const headingElement = h(
    'h1',
    { className: 'headline', lang: 'en' },
    strongElement,
    ' Element'
  );

  const rootElement = document.getElementById('root');
  const virtualDomRoot = createRoot(rootElement);
  // console.log(virtualDomRoot);

  virtualDomRoot.render(headingElement);
}

demo2();
