import React from 'react';

import styles from './App.module.css';
import { ScrollButton, DescriptionList } from '@/components';

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
  const appElement = document.getElementById('root')?.firstElementChild;

  if (target.matches('[title="스크롤 다운"]')) {
    appElement.scroll({
      top,
      behavior: 'smooth',
    });
  }
  if (target.matches('[title="스크롤 업"]')) {
    appElement.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
};

// ---------------------------------------------------------
// 선언형 프로그래밍
// ---------------------------------------------------------
// 상태 선언
// 상태 업데이트
// React 재조정 알고리즘 (변경 감지)
// 컴포넌트 다시 렌더링 (하위에 포함된 컴포넌트 모두 다시 렌더링 : 성능 저하)

function App() {
  const [imageType, setImageType] = React.useState('react');

  return (
    <div className={styles.container}>
      <h1>React 컴포넌트 상태 관리</h1>
      <button
        type="button"
        onClickCapture={() => {
          // DOM 요소 접근/조작
          // 사이드 이펙트 처리
          // 선언된 상태 업데이트 → UI 리-렌더링
          setImageType(imageType === 'react' ? 'vite' : 'react');
        }}
      >
        change imageType
      </button>
      <hr />
      <DescriptionList
        {...{
          statusMessage,
          imageType,
          isShowReactImage,
          renderList,
          reactLibrary,
        }}
      />
      <ScrollButton.Group onScroll={handleScrollMove}>
        <ScrollButton />
        <ScrollButton mode="up" />
      </ScrollButton.Group>
    </div>
  );
}

export default App;
