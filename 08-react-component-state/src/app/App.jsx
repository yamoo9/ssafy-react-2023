import styles from './App.module.css';
import { ScrollButton, DescriptionList } from '@/components';

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

function App() {
  const descriptionListProps = {
    statusMessage,
    imageType,
    isShowReactImage,
    renderList,
    reactLibrary,
  };

  return (
    <div className={styles.container}>
      <h1>React 컴포넌트 상태 관리</h1>
      <hr />
      <DescriptionList {...descriptionListProps} />
      <ScrollButton.Group onScroll={handleScrollMove}>
        <ScrollButton />
        <ScrollButton mode="up" />
      </ScrollButton.Group>
    </div>
  );
}

export default App;
