# TypeScript 언어 (컴파일러)

React 개발에서 자주 사용되는 TypeScript 언어 문법에 대해 살펴봅니다.

## TypeScript 컴파일러(Compiler) 도움말

[tsc CLI Options](https://www.typescriptlang.org/ko/docs/handbook/compiler-options.html)에서 모든 컴파일러 옵션에 대해 알아볼 수 있습니다.

<details>
  <summary>TSC CLI 도움말</summary>

  ```sh
  tsc: TypeScript 컴파일러 - 버전 5.1.6

  ✅ 공통 명령

    tsc
    현재 프로젝트(워킹 디렉토리 tsconfig.json)를 컴파일합니다.

    tsc app.ts util.ts
    tsconfig.json을 무시하고 지정된 파일을 기본 컴파일러 옵션으로 컴파일합니다.

    tsc -b
    워킹 디렉토리에 복합(composite) 프로젝트를 빌드합니다.

    tsc --init
    워킹 디렉토리에 권장된 설정으로 tsconfig.json 파일을 생성합니다.

    tsc -p ./path/to/tsconfig.json
    지정된 경로에 있는 TypeScript 프로젝트를 컴파일합니다.

    tsc --help --all
    가능한 모든 컴파일러 옵션을 보여주는 도움말 확장 버전을 출력합니다.

    tsc --noEmit
    tsc --target esnext
    추가 설정으로 현재 프로젝트를 컴파일합니다.

  ✅ 커멘드라인 플래그

    --help, -h
    도움말을 출력합니다.

    --watch, -w
    변경이 감지되면 컴파일합니다.

    --all
    모든 컴파일러 옵션을 표시합니다.

    --version, -v
    컴파일러 버전을 인쇄합니다.

    --init
    TypeScript 프로젝트를 초기화하고 tsconfig.json 파일을 생성합니다.

    --project, -p
    구성 파일 또는 'tsconfig.json'이 있는 폴더에 대한 경로가 지정된 프로젝트를 컴파일합니다.

    --build, -b
    오래된 경우 하나 이상의 프로젝트 및 해당 종속성 빌드

    --showConfig
    빌드하는 대신 최종 구성을 출력합니다.

  ✅ 공통 컴파일러 옵션

    --pretty
    컴파일러 오류를 더 쉽게 읽을 수 있도록 TypeScript의 출력에서 ​​색상 및 서식을 활성화합니다.
    타입: boolean
    기본값: true

    --declaration, -d
    프로젝트의 TypeScript 및 JavaScript 파일에서 .d.ts 파일을 생성합니다.
    타입: boolean
    기본값: `composite`가 설정되지 않은 경우 `false`

    --declarationMap
    d.ts 파일에 대한 소스 맵을 만듭니다.
    타입: boolean
    기본값: false

    --emitDeclarationOnly
    JavaScript 파일이 아닌 d.ts 파일만 출력합니다.
    타입: boolean
    기본값: false

    --sourceMap
    컴파일 된 JavaScript 파일에 대한 소스 맵 파일을 만듭니다.
    타입: boolean
    기본값: false

    --target, -t
    컴파일 된 JavaScript의 JavaScript 언어 버전을 설정하고 호환 가능한 라이브러리 선언을 포함합니다.
    옵션값: es3, es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, esnext
    기본값: es5

    --module, -m
    생성되는 모듈 코드를 지정합니다.
    옵션값: none, commonjs, amd, umd, system, es6/es2015, es2020, es2022, esnext, node16, nodenext
    기본값: undefined

    --lib
    타켓 런타임 환경을 설명하는 번들 라이브러리 선언 파일 세트를 지정합니다.
    옵션값: es5, es6/es2015, es7/es2016, es2017, es2018, es2019, es2020, es2021, es2022, es2023, esnext, dom, dom.iterable, webworker, webworker.importscripts, webworker.iterable, scripthost, es2015.core, es2015.collection, es2015.generator, es2015.iterable, es2015.promise, es2015.proxy, es2015.reflect, es2015.symbol, es2015.symbol.wellknown, es2016.array.include, es2017.object, es2017.sharedmemory, es2017.string, es2017.intl, es2017.typedarrays, es2018.asyncgenerator, es2018.asynciterable/esnext.asynciterable, es2018.intl, es2018.promise, es2018.regexp, es2019.array, es2019.object, es2019.string, es2019.symbol/esnext.symbol, es2019.intl, es2020.bigint/esnext.bigint, es2020.date, es2020.promise, es2020.sharedmemory, es2020.string, es2020.symbol.wellknown, es2020.intl, es2020.number, es2021.promise/esnext.promise, es2021.string, es2021.weakref/esnext.weakref, es2021.intl, es2022.array, es2022.error, es2022.intl, es2022.object, es2022.sharedmemory, es2022.string/esnext.string, es2022.regexp, es2023.array/esnext.array, esnext.intl, decorators, decorators.legacy
    기본값: undefined

    --allowJs
    JavaScript 파일이 프로그램 일부가 되도록 허용합니다. 이 파일에서 오류를 가져오려면 'checkJS' 옵션을 사용하세요.
    타입: boolean
    기본값: false

    --checkJs
    JavaScript 파일에서 타입 검사 오류 보고를 활성화합니다.
    타입: boolean
    기본값: false

    --jsx
    컴파일 되는 JSX 코드를 지정합니다.
    옵션값: preserve, react, react-native, react-jsx, react-jsxdev
    기본값: undefined

    --outFile
    모든 컴파일 출력을 하나의 JavaScript 파일로 번들하는 파일을 지정합니다.'declaration'이 true 인 경우 모든 .d.ts 출력을 묶는 파일도 지정합니다.

    --outDir
    컴파일 된 모든 파일의 아웃풋 디렉토리를 지정합니다.

    --removeComments
    코멘트(주석)을 삭제합니다.
    타입: boolean
    기본값: false

    --noEmit
    컴파일 된 파일을 출력하지 않도록 설정합니다.
    타입: boolean
    기본값: false

    --strict
    엄격한 타입 검사 옵션을 모두 활성화합니다.
    타입: boolean
    기본값: false

    --types
    소스 파일에서 참조하지 않고 포함할 타입 패키지 이름을 지정합니다.

    --esModuleInterop
    CommonJS 모듈 가져오기 지원을 쉽게 하기 위해 설정합니다. 이 옵션이 활성화되면 타입 호환성을 위해 'allowSyntheticDefaultImports' 또한 활성화됩니다.
    타입: boolean
    기본값: false
  ```
</details>


## TypeScript 구성 파일

`tsconfig.json` 구성 파일 레퍼런스

```js
{
  "compilerOptions": {
    // 컴파일 될 JavaScript 언어 버전 설정 및 호환 가능한 라이브러리 선언 포함
    "target": "ES2016",
    // 모듈 가져오기/내보내기 코드 방식 설정
    "module": "ESNext",
    // 출력 디렉토리 설정
    "outDir": "./scripts",
    // CommonJS 모듈 가져오기 지원을 위한 JavaScript 출력
    // 타입 호환성을 위해 'allowSyntheticDefaultImports' 또한 활성화
    "esModuleInterop": true,
    // 모듈 가져오기에서 대소문자가 올바른지 확인
    "forceConsistentCasingInFileNames": true,
    // 엄격하게 모든 타입 검사 옵션 활성화
    "strict": true,
    // 모든 .d.ts 파일의 타입 검사 생략(skip) 설정
    "skipLibCheck": true
  }
}
```

## 프로젝트 커멘드 구성

`package.json` 프로젝트 구성 파일 레퍼런스

```json
{
  "scripts": {
    "dev": "pnpm watch | pnpm serve",
    "serve": "live-server --host=localhost --port=3000 --no-browser",
    "compile": "tsc -p tsconfig.json",
    "watch": "pnpm compile --watch"
  },
  "devDependencies": {
    "live-server": "^1.2.2",
    "typescript": "^5.1.6"
  }
}
```