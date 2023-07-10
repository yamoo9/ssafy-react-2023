/* eslint-disable no-unused-vars */

import './styles/App.css';

// 스타일 및 에셋 연결
import reactImage from './assets/react.svg';
import viteImage from './assets/vite.svg';

const imageType = 'vite'; // type ImageType = 'react' | 'vite'

const isShowReactImage = true;

const statusMessage = [
  '⌛️ 대기',
  '⏳ 로딩 중...',
  '✅ 로딩 성공!',
  '❌ 로딩 실패.',
];

const renderList = ({ reverse = false } = {}) => {
  let processArray = statusMessage;

  if (reverse) {
    processArray = [...statusMessage].reverse();
  }

  return processArray.map((message, index) => <li key={index}>{message}</li>);
};

// 객체 리스트 렌더링
const reactLibrary = {
  name: 'React',
  author: '조던 워케(Jordan Walke)',
  writtenIn: 'JavaScript',
  type: 'JavaScript 라이브러리',
  license: 'MIT',
};

let mounted = 0;

function App() {
  // console.log(++mounted); // 0 → 1

  // 변수 선언 -> 값
  const statueMessageString =
    statusMessage[Math.floor(Math.random() * statusMessage.length)];

  const isntShowHeadline = false;

  const isReactType = imageType === 'react';

  // const viteImageStyles = { height: 42, objectFit: 'contain' };

  const isShowReactImage = !true;

  // function body area
  // virtual dom
  console.log(document.querySelector('.App')); // null

  // life cycle methods
  // side effects
  // event handling (side effects)

  return (
    <div className="App">
      <h1 hidden={isntShowHeadline}>JSX 인 액션</h1>
      <hr />
      <dl className="descriptionList">
        <dt>데이터 바인딩(data binding)</dt>
        <dd>
          <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
          <span className="status" title={statueMessageString}>
            {/* statusMessage 값을 화면에 표시합니다. (랜덤 표시도 도전!) */}
            {/* React Props.children [child, ...] */}
            {/* JSX = JavaScript Expression */}
            {statueMessageString}
          </span>
        </dd>
        <dt>조건부 렌더링(conditional rendering)</dt>
        <dd>
          <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
          <div className="conditionalRendering">
            {/* imageType 값이 'vite'인 경우 Vite 이미지를, 'react'인 경우 React 이미지를 화면에 표시합니다. */}
            {/* {imageType === 'vite' ? (
              <img src={viteImage} alt="Vite" />
            ) : (
              <img src={reactImage} alt="react" />
            )} */}
            {/react|vite/.test(imageType) && (
              <img
                src={isReactType ? reactImage : viteImage}
                alt={isReactType ? 'react' : 'vite'}
              />
            )}
            {/* imageType이 'vite'인 경우 'Vite', 'react'인 경우 'React' 텍스트를 화면에 표시합니다. */}
          </div>
        </dd>
        <dd style={{ marginTop: 12 }}>
          <p>
            spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.
          </p>
          <div className="conditionalRendering">
            {Math.random() >= 0.5 ? (
              <img className="spinner" src="/spinner.svg" alt="로딩 중..." />
            ) : (
              <img
                src="/vite.svg"
                alt="Vite"
                style={{ height: 42, objectFit: 'contain' }}
              />
            )}
          </div>
        </dd>
        <dt>조건부 표시(conditional display)</dt>
        <dd>
          <p>
            표시(display) 여부에 따라 이미지가 화면에서 감춰지거나 표시됩니다.
          </p>
          {/* isShowReactImage 상태 값에 따라 이미지가 화면에 표시되거나 표시되지 않도록 설정합니다. */}
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
          {/* <ul className="renderList">
            {statusMessage.map((message, index) => {
              return <li key={index}>{message}</li>;
            })}
          </ul> */}
        </dd>
        <dd>
          <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
          <ul className="renderList">{renderList({ reverse: true })}</ul>
          {/* <ul className="renderList">
            {[...statusMessage].reverse().map((message, index) => {
              return <li key={index}>{message}</li>;
            })}
          </ul> */}
          {/* <p>
            statusMessage:
            {statusMessage}
          </p> */}
        </dd>
        <dd>
          <p>
            React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
            렌더링합니다.
          </p>
          <dl className="reactLibrary">
            {/* 여기서 설명 목록으로 리스트 렌더링 합니다. */}
            {/* 객체 → 배열 */}
            <dl>
              {Object.entries(reactLibrary).map(([key, value]) => (
                <div key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </dl>
        </dd>
      </dl>

      {/* 스크롤 다운/업 버튼에 이벤트를 연결해 App 컴포넌트가 부드럽게 스크롤 되도록 핸들러를 작성합니다. */}
      <div role="group" className="buttonGroup">
        <button
          type="button"
          className="scrollDown"
          aria-label="스크롤 다운"
          title="스크롤 다운"
          onClick={(e) => {
            // console.log('clicked scroll down button');
            const app = document.querySelector('.App');
            const buttonGroup = document.querySelector(
              '.buttonGroup[role=group]'
            );

            app?.scroll({
              top: buttonGroup?.getBoundingClientRect().top,
              behavior: 'smooth',
            });
          }}
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
          onClick={() => {
            // console.log('clicked scroll up button');
            const app = document.querySelector('.App');
            app?.scroll({
              top: 0,
              behavior: 'smooth',
            });
          }}
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
