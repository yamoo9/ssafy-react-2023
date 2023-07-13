import DescriptionList from './components/DescriptionList';
import ScrollButton from './components/ScrollButton';
import './styles/App.css';

/* -------------------------------------------------------------------------- */

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

const handleScrollMove = ({
  currentTarget,
  target,
}: React.MouseEvent<HTMLDivElement>) => {
  const { top } = (currentTarget as HTMLDivElement).getBoundingClientRect();
  const appElement = document.querySelector('.App') as HTMLDivElement;

  if ((target as HTMLElement).matches('.scrollDown')) {
    appElement.scroll({
      top,
      behavior: 'smooth',
    });
  }
  if ((target as HTMLElement).matches('.scrollUp')) {
    appElement.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
};

/* -------------------------------------------------------------------------- */

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>React 컴포넌트 Props 검사</h1>
      <hr />
      {/* 객체 전개 구문  */}
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
