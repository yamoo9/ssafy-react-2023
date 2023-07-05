// @ts-nocheck

// ------------------------------------------------------------------------------
// 📌 타입 선언 파일 설치 (install type declaration file)
// ⭐️ URL : https://bit.ly/3UVFBMz
// ------------------------------------------------------------------------------
// - axios 라이브러리처럼 타입 선언 파일이 제공되는 경우도 있지만, 그렇지 않은 경우도 있습니다.
// - 예를 들어 lodash 라이브러리는 별도의 타입 선언 파일을 제공하지 않습니다.
// ------------------------------------------------------------------------------

// lodash 설치 후, package.json 파일에 types 또는 typing 항목이 설정되어 있는 지 확인합니다.
// TypeScript 2.0부터 선언 파일을 찾고 설치하는 것이 쉬워졌습니다.
// https://www.typescriptlang.org/dt/search?search=lodash
// 참고: https://bit.ly/3GbXkLn | https://github.com/DefinitelyTyped/DefinitelyTyped

import _ from 'lodash';

const collection = ['TypeScript', 'ECMAScript', 'Java', 'Python'];

console.log(_.shuffle(collection));
