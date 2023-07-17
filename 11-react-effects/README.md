# React 이펙트 관리

React 컴포넌트의 이펙트를 관리하는 방법을 학습합니다. ([fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) 또는 [Axios](https://axios-http.com/kr/) 라이브러리 활용)

- [ ] 네트워크 요청/응답 ([Pexel API](https://www.pexels.com/ko-kr/api/documentation) 활용)
- [ ] DOM 요소 접근/조작 ([vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) 활용)
- [ ] 이벤트 구독/취소 ([AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) 활용)

## React 훅

- [ ] useEffect
- [ ] useRef

## 커스텀 훅

- [ ] usePhotos
- [ ] useData
- [ ] useTodos ([jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) 활용)

## 스타일

<details>
  <summary>PhotoGallery.module.css</summary>

  ```css
  .gallery {
    position: relative;
    overflow: auto;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
    margin: 12px 0;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    padding-bottom: 14px;
    min-height: 400px;
  }

  .galleryCard {
    scroll-snap-align: start;
    text-align: center;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }

  .errorBox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
    background: #7d1616;
    color: #fff;
  }
  ```
</details>