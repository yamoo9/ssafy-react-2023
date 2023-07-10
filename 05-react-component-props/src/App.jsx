/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import './styles/App.css';
import vitePath from './assets/vite.svg';
import reactPath from '/react.svg';

const imageType = 'react';

const isShowReactImage = true;

const statusMessage = [
  '⌛️ 대기',
  '⏳ 로딩 중...',
  '✅ 로딩 성공!',
  '❌ 로딩 실패.',
];

const reactLibrary = {
  name: 'React',
  author: '조던 워케(Jordan Walke)',
  writtenIn: 'JavaScript',
  type: 'JavaScript 라이브러리',
  license: 'MIT',
};

const renderList = ({ isReverse = false } = {}) => {
  const data = !isReverse ? statusMessage : statusMessage.reverse();
  return data.map((message, index) => <li key={index}>{message}</li>);
};

const handleScrollMove = ({ currentTarget, target }) => {
  const { top } = currentTarget.getBoundingClientRect();
  const appElement = document.querySelector('.App');

  if (target.matches('.scrollDown')) {
    appElement.scroll({
      top,
      behavior: 'smooth',
    });
  }
  if (target.matches('.scrollUp')) {
    appElement.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
};

function App() {
  return (
    <div className="App">
      <h1>React 컴포넌트 &amp; Props</h1>
      <hr />
      <dl className="descriptionList">
        <dt>데이터 바인딩(data binding)</dt>
        <dd>
          <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
          <span className="status">
            {statusMessage[Math.floor(Math.random() * statusMessage.length)]}
          </span>
        </dd>
        <dt>조건부 렌더링(conditional rendering)</dt>
        <dd>
          <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
          <div className="conditionalRendering">
            <img src={imageType === 'vite' ? vitePath : reactPath} alt="" />
            <span>{imageType === 'vite' ? 'Vite' : 'React'}</span>
          </div>
        </dd>
        <dd style={{ marginTop: 12 }}>
          <p>
            spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.
          </p>
          <div className="conditionalRendering">
            {Math.floor(Math.random() * 2) ? (
              <img className="spinner" src="/spinner.svg" alt="로딩 중..." />
            ) : (
              <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
            )}
          </div>
        </dd>
        <dt>조건부 표시(conditional display)</dt>
        <dd>
          <p>
            표시(display) 여부에 따라 이미지가 화면에서 감춰지거나 표시됩니다.
          </p>
          <picture hidden={!isShowReactImage}>
            <source type="image/avif" srcSet="/react.avif" />
            <source type="image/webp" srcSet="/react.webp" />
            <img src="/react.png" alt="React" height={42} />
          </picture>
        </dd>
        <dt>리스트 렌더링(list rendering)</dt>
        <dd>
          <p>상태 메시지(status message) 배열을 리스트 렌더링합니다.</p>
          <ul className="renderList">{renderList()}</ul>
        </dd>
        <dd>
          <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
          <ul className="renderList">{renderList(-1)}</ul>
        </dd>
        <dd>
          <p>
            React 라이브러리(reactLibrary) 객체의 키, 값을 리스트 렌더링합니다.
          </p>
          <dl className="reactLibrary">
            {Object.entries(reactLibrary).map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </dd>
      </dl>

      <div role="group" className="buttonGroup" onClick={handleScrollMove}>
        <button
          type="button"
          className="scrollDown"
          aria-label="스크롤 다운"
          title="스크롤 다운"
        >
          <svg
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
          >
            <path
              d="m112 268 144 144 144-144M256 392V100"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeMiterlimit={10}
              strokeWidth="48px"
            />
          </svg>
        </button>
        <button
          type="button"
          className="scrollUp"
          aria-label="스크롤 업"
          title="스크롤 업"
        >
          <svg
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
          >
            <path
              d="m112 268 144 144 144-144M256 392V100"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeMiterlimit={10}
              strokeWidth="48px"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
