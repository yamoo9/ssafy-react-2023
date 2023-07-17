import { useState } from 'react';
import { getRandomNumber } from '@/utils';

const deleteButtonStyle = {
  marginLeft: 8,
  border: '1px solid currentColor',
  borderRadius: 4,
  padding: '2px 6px',
  background: 'transparent',
  fontSize: '1.2rem',
  color: '#881818',
};

const initialStatusMessages = [
  '⌛️ 대기',
  '⏳ 로딩 중...',
  '✅ 로딩 성공!',
  '❌ 로딩 실패.',
];

function useStatusMessages() {
  const [statusMessage, setStatusMessage] = useState(initialStatusMessages);

  const addStatusMessage = (e) => {
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

  const deleteStatusMessage = (removeIndex) => {
    setStatusMessage((messages) =>
      messages.filter((message, index) => index !== removeIndex)
    );
  };

  const [statusMessageIndex, setStatusMessageIndex] = useState(0);

  const randomStatusMessage = () => {
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
          onClick={() => deleteStatusMessage(index)}
          style={deleteButtonStyle}
        >
          삭제
        </button>
      </li>
    ));
  };

  return {
    statusMessage,
    statusMessageIndex,
    addStatusMessage,
    deleteStatusMessage,
    randomStatusMessage,
    renderList,
  };
}

export default useStatusMessages;
