# CSS 모듈

CSS의 스타일 충돌 문제 해결을 위해 CSS 모듈을 사용해 React 컴포넌트를 스타일 하는 방법을 살펴봅니다.

- [CSS Modules](https://ko.vitejs.dev/guide/features.html#css-modules)
- [CSS Modules 옵션](https://ko.vitejs.dev/config/shared-options.html#css-modules)
- [CSS Modules 옵션: 스코프 이름 생성 구성](https://github.com/madyankin/postcss-modules#generating-scoped-names)
- [CSS 개발 소스맵 생성 옵션](https://ko.vitejs.dev/config/shared-options.html#css-devsourcemap)

# 절대 경로

상대 경로 대신 절대 경로를 사용하고자 한다면 별칭(alias) 설정이 필요합니다.

- [resolve.alias](https://ko.vitejs.dev/config/shared-options.html#resolve-alias)
- [rollup → alias.entries 구성](https://github.com/rollup/plugins/tree/master/packages/alias#entries)

절대 경로 설정 시, VSCode에서 클릭으로 모듈에 접근하려면 `jsconfig.json` 파일을 생성해야 합니다.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
