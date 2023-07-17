import { useState } from 'react';
import styles from './App.module.css';
import { ScrollButton, DescriptionList } from '@/components';
import getRandomNumber from '@/utils/getRandomNumber';

const deleteButtonStyle = {
  marginLeft: 8,
  border: '1px solid currentColor',
  borderRadius: 4,
  padding: '2px 6px',
  background: 'transparent',
  fontSize: '1.2rem',
  color: '#881818',
};

function App() {
  const [statusMessage, setStatusMessage] = useState([
    '⌛️ 대기',
    '⏳ 로딩 중...',
    '✅ 로딩 성공!',
    '❌ 로딩 실패.',
  ]);

  const handleAddStatusMessage = (e) => {
    e.preventDefault();

    const formElement = e.target;
    const inputElement = formElement.querySelector('input');
    const newItem = inputElement.value.trim();

    if (newItem.length > 0) {
      setStatusMessage((messages) => {
        const newStatusMessage = [newItem, ...messages];
        return newStatusMessage;
      });
      inputElement.value = '';
    } else {
      alert('새로운 상태 메시지를 입력하세요.');
      inputElement.focus();
      inputElement.select();
    }
  };

  const handleDeleteStatusMessage = (removeIndex) => {
    setStatusMessage((messages) =>
      messages.filter((message, index) => index !== removeIndex)
    );
  };

  const [statusMessageIndex, setStatusMessageIndex] = useState(0);

  const handleRandomStatusMessage = () => {
    const randomIndex = getRandomNumber({ max: statusMessage.length });
    setStatusMessageIndex(randomIndex);
  };

  const renderList = ({ isReverse = false } = {}) => {
    const data = !isReverse ? statusMessage : [...statusMessage].reverse();
    return data.map((message, index) => (
      <li key={index}>
        {message}{' '}
        <button
          type="button"
          onClick={() => handleDeleteStatusMessage(index)}
          style={deleteButtonStyle}
        >
          삭제
        </button>
      </li>
    ));
  };

  /* -------------------------------------------------------------------------- */

  const [imageType, setImageType] = useState('react');

  const handleToggleImageType = () => {
    setImageType(imageType === 'react' ? 'vite' : 'react');
  };

  /* -------------------------------------------------------------------------- */

  const [isShowReactImage, setIsShowReactIamge] = useState(true);

  const handleToggleReactImage = () => {
    setIsShowReactIamge((visibleState) => !visibleState);
  };

  /* -------------------------------------------------------------------------- */

  const [reactLibrary, setReactLibrary] = useState({
    name: 'React',
    author: '조던 워케(Jordan Walke)',
    writtenIn: 'JavaScript',
    type: 'JavaScript 라이브러리',
    license: 'MIT',
  });

  const handleUpdateReactLibrary = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const inputElementList = Array.from(formElement.querySelectorAll('input'));
    const idValues = inputElementList.map(({ id, value }) => [id, value]);
    const updateData = Object.fromEntries(idValues);

    setReactLibrary(updateData);
  };

  /* -------------------------------------------------------------------------- */

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

  const descriptionListProps = {
    renderList,
    statusMessage: statusMessage[statusMessageIndex],
    onRandomStatusMessage: handleRandomStatusMessage,
    onAddStatusMessage: handleAddStatusMessage,

    imageType,
    onToggleImageType: handleToggleImageType,

    isShowReactImage,
    onToggleReactImage: handleToggleReactImage,

    reactLibrary,
    onUpdateReactLibrary: handleUpdateReactLibrary,
  };

  return (
    <div className={styles.container}>
      <h1>React 커스텀 훅</h1>
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
