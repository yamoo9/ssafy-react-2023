import classes from './styles/App.module.css';

import ScrollButton from './components/ScrollButton';
import DescriptionList from './components/DescriptionList';

// console.log(classes.App);
// console.log(classes.demo);

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

// Thinking in React

const handleScrollMove = ({ currentTarget, target }) => {
  const { top } = currentTarget.getBoundingClientRect();
  const appElement = document.querySelector('._App_qnegi_1');

  if (!appElement) {
    throw new Error('appElement가 문서에 존재하지 않습니다.');
  }

  console.log(appElement);

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
  const descriptionListProps = {
    statusMessage,
    imageType,
    isShowReactImage,
    renderList,
    reactLibrary,
  };

  return (
    <div className={classes.App}>
      <div className={classes.container}>
        <h1>CSS 모듈 &amp; 절대 경로</h1>
        <hr />
        <DescriptionList {...descriptionListProps} />
        <ScrollButton.Group onScroll={handleScrollMove}>
          <ScrollButton />
          <ScrollButton mode="up" />
        </ScrollButton.Group>
      </div>
    </div>
  );
}

export default App;
