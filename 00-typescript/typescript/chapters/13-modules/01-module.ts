// ------------------------------------------------------------------------------------------
// 📌 모듈, 네임스페이스 (Modules, Namespaces)
// ⭐️ URL : https://bit.ly/3hz27wd
// ------------------------------------------------------------------------------------------
// - TypeScript는 모듈이 아닌 파일에 선언된 변수, 함수는 모두 일반적인 스크립트 파일로 간주합니다.
// - 스크립트 파일로 간주된 경우, 파일에 선언된 변수, 함수는 모두 전역 범위에 있다고 선언됩니다.
// - 모듈 파일로 식별되는 조건은 import, export 등이 명시적으로 사용된 경우입니다.
// ------------------------------------------------------------------------------------------

// ES 모듈이 등장하기 전 TypeScript는 네임스페이스라 불리는 자체적인 모듈 타입을 가졌습니다.
// 네임스페이스는 복잡한 선언 파일을 만드는데 유용한 기능이 많지만, ES 모듈의 등장으로 사용이 권장되지 않습니다.
// 네임스페이스의 대부분 기능은 ES 모듈에 존재하므로 ES의 방향에 맞게 사용하는 것이 좋습니다.
// https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-namespaces

// 하지만 네임스페이스는 여전히 타입 선언 파일에 사용되기도 합니다. (예: chrome)
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/chrome/index.d.ts#L40

// ------------------------------------------------------------------------------------------

// ⭐️ TypeScript의 특정 ES 모듈 구문
// https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax

// 1. 타입만 가져오는 import 구문
import type { Cat, Dog } from './animal.js';

// 2. 인라인 타입 import 구문
import {
  createAnimal,
  type Cat as CatType,
  type Dog as DogType,
} from './animal.js';
