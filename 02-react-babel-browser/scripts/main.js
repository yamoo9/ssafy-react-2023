function main() {
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  // console.log('HTML에서 React 시작하기! 😃');

  // React 요소 생성
  const app = h(
    'div',
    {
      className: 'app',
    },
    h(
      'figure',
      {
        className: 'library',
      },
      h('img', {
        src: 'assets/ReactLogo.svg',
        alt: '',
      }),
      h(
        'strong',
        {
          className: 'name',
        },
        'React'
      ),
      h(
        'p',
        {
          className: 'catchphrize',
        },
        '사용자 인터페이스 구축을 위한 웹 &amp; 모바일 라이브러리'
      )
    )
  );

  // ReactDOMRoot 객체 생성
  const reactDomRoot = createRoot(document.getElementById('root'));
  reactDomRoot.render(app);
}

function handleGoToReference() {
  globalThis.open('https://react.dev', '_blank');
}

main();
