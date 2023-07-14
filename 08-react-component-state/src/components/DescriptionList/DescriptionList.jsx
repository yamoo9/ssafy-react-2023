import vitePath from '@/assets/vite.svg';
import { arrayOf, bool, exact, func, oneOf, string } from 'prop-types';
import { useState } from 'react';
import styles from './DescriptionList.module.css';
import reactPath from '/react.svg';

function DescriptionList({
  statusMessage,
  onAddStatusMessage,
  imageType,
  isShowReactImage,
  renderList,
  reactLibrary,
  onUpdateReactLibrary,
}) {
  const [editMode, setEditMode] = useState(false);

  const handleAddStatusMessage = (e) => {
    e.preventDefault();
    const { newStatusMessage } = e.target;

    const { value } = newStatusMessage;

    // 입력 조건 (새로운 상태 메시지의 값이 0보다 크다)
    if (value.trim().length > 0) {
      // 새로운 상태 메시지로 추가
      onAddStatusMessage?.(value);
      newStatusMessage.value = '';
    } else {
      newStatusMessage.select();
    }
  };

  return (
    <dl className={styles.container}>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className={styles.status}>
          {statusMessage[Math.floor(Math.random() * statusMessage.length)]}
        </span>
      </dd>
      <dt>조건부 렌더링(conditional rendering)</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className={styles.conditionalRendering}>
          <img src={imageType === 'vite' ? vitePath : reactPath} alt="" />
          <span>{imageType === 'vite' ? 'Vite' : 'React'}</span>
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className={styles.conditionalRendering}>
          {Math.floor(Math.random() * 2) ? (
            <img
              className={styles.spinner}
              src="/spinner.svg"
              alt="로딩 중..."
            />
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
        <form onSubmit={handleAddStatusMessage}>
          <div className="formControl">
            <label htmlFor="newStatusMessage">새로운 상태 메시지</label>
            <input id="newStatusMessage" name="newStatusMessage" type="text" />
          </div>
          <button type="submit">추가</button>
        </form>
        <p>상태 메시지(status message) 배열을 리스트 렌더링합니다.</p>
        <ul className={styles.renderList}>{renderList()}</ul>
      </dd>
      <dd>
        <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
        <ul className={styles.renderList}>{renderList({ isReverse: true })}</ul>
      </dd>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 리스트 렌더링합니다.
        </p>
        <dl className={styles.reactLibrary}>
          {!editMode ? (
            <>
              {Object.entries(reactLibrary).map(([key, value]) => (
                <div key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <button
                type="button"
                style={{ marginTop: 12 }}
                onClick={() => setEditMode(true)}
              >
                수정
              </button>
            </>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <h2>에디트 모드</h2>
              <form className="editForm">
                {Object.entries(reactLibrary).map(([key, value]) => (
                  <div key={key} className="formControl">
                    <label htmlFor={key}>{key}</label>
                    <input id={key} type="text" defaultValue={value} />
                  </div>
                ))}
              </form>
              <button
                type="button"
                onClick={() => {
                  const editForm = document.querySelector('.editForm');
                  const { name, author, writtenIn, type, license } = editForm;
                  onUpdateReactLibrary({
                    name: name.value,
                    author: author.value,
                    writtenIn: writtenIn.value,
                    type: type.value,
                    license: license.value,
                  });
                  setEditMode(false);
                }}
              >
                저장
              </button>
            </div>
          )}
        </dl>
      </dd>
    </dl>
  );
}

DescriptionList.defaultProps = {
  renderList: () => {},
};

DescriptionList.propTypes = {
  statusMessage: arrayOf(
    string
    // oneOf(['⌛️ 대기', '⏳ 로딩 중...', '✅ 로딩 성공!', '❌ 로딩 실패.'])
  ).isRequired,
  onAddStatusMessage: func,
  imageType: oneOf(['react', 'vite']).isRequired,
  isShowReactImage: bool.isRequired,
  renderList: func, // () => void | undefined
  reactLibrary: exact({
    name: string,
    author: string,
    writtenIn: string,
    type: string,
    license: string,
  }).isRequired,
  onUpdateReactLibrary: func,
};

export default DescriptionList;
