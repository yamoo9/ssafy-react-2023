function main() {
  // JSX 구문 (웹 표준이 아님. 웹 브라우저 해석 못함)

  // JSX (사용자) → 컴파일러(TypeScript or Babel) → React 요소 (React.createElement())
  const app = (
    <div className="app">
      <figure className="library">
        <img className="logo" src="assets/ReactLogo.svg" alt="" />
        <strong className="name">React</strong>
        <p className="catchphrize">
          사용자 인터페이스 구축을 위한 웹 &amp; 모바일 라이브러리
        </p>
      </figure>
      <div role="group" className="button-group">
        <button type="button" className="primary">
          React 배우기
        </button>
        <button
          type="button"
          className="secondary"
          // onclick="handleGoToReference()"
        >
          <abbr title="Application Programming Interface">API</abbr> 레퍼런스
        </button>
      </div>
    </div>
  );

  // ReactDOMRoot 객체 생성
  // ReactDOM.createRoot().render(ReactElement)
  const reactDomRoot = ReactDOM.createRoot(document.getElementById('root'));
  reactDomRoot.render(app);
}

function handleGoToReference() {
  globalThis.open('https://react.dev', '_blank');
}

main();
