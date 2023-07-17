import { useState } from 'react';

import styles from './DescriptionList.module.css';
import vitePath from '@/assets/vite.svg';
import reactPath from '/react.svg';

import useImageType from '@/hooks/useImageType';
import useReactImage from '@/hooks/useReactImage';
import useReactLibrary from '@/hooks/useReactLibrary';
import useStatusMessages from '@/hooks/useStatusMessages';
import { getRandomNumber } from '@/utils';

function DescriptionList() {
  const {
    statusMessage,
    statusMessageIndex,
    renderList,
    randomStatusMessage: onRandomStatusMessage,
    addStatusMessage: onAddStatusMessage,
  } = useStatusMessages();

  const { imageType, toggleImageType: onToggleImageType } = useImageType();

  const { isShowReactImage, toggleReactImage: onToggleReactImage } =
    useReactImage();

  const { reactLibrary, updateReactLibrary: onUpdateReactLibrary } =
    useReactLibrary();

  const [changeMode, setChangeMode] = useState(false);

  const handleToggleMode = () => {
    setChangeMode((mode) => !mode);
  };

  return (
    <dl className={styles.container}>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <button
          type="button"
          className={styles.button}
          onClick={onRandomStatusMessage}
        >
          상태 메시지 변경
        </button>
        <span className={styles.status}>
          {statusMessage[statusMessageIndex]}
        </span>
      </dd>
      <dt>조건부 렌더링(conditional rendering)</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <button
          type="button"
          className={styles.button}
          onClick={onToggleImageType}
        >
          이미지 토글
        </button>
        <div className={styles.conditionalRendering}>
          <img src={imageType === 'vite' ? vitePath : reactPath} alt="" />
          <span>{imageType === 'vite' ? 'Vite' : 'React'}</span>
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className={styles.conditionalRendering}>
          {getRandomNumber({ max: 2 }) ? (
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
        <button
          type="button"
          className={styles.button}
          onClick={onToggleReactImage}
        >
          {isShowReactImage ? '감춤(hide)' : '표시(show)'}
        </button>
        <picture
          style={{ display: isShowReactImage ? 'inline-block' : 'none' }}
        >
          <source type="image/avif" srcSet="/react.avif" />
          <source type="image/webp" srcSet="/react.webp" />
          <img src="/react.png" alt="React" height={42} />
        </picture>
      </dd>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>상태 메시지(status message) 배열을 리스트 렌더링합니다.</p>
        <form onSubmit={onAddStatusMessage}>
          <div className={styles.formControl}>
            <label htmlFor="newStatusMessage">새로운 상태 메시지</label>
            <input
              type="text"
              id="newStatusMessage"
              placeholder="예) 😳 알 수 없는 오류 발생"
            />
          </div>
        </form>
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
          {!changeMode ? (
            <>
              {Object.entries(reactLibrary).map(([key, value]) => (
                <div key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <button
                type="buton"
                className={styles.button}
                onClick={handleToggleMode}
              >
                수정
              </button>
            </>
          ) : (
            <form
              className={styles.updateForm}
              onSubmit={(e) => {
                onUpdateReactLibrary(e);
                handleToggleMode();
              }}
            >
              {Object.entries(reactLibrary).map(([key, value]) => (
                <div key={key} className={styles.formControl}>
                  <label htmlFor={key}>{key}</label>
                  <input type="text" id={key} defaultValue={value} />
                </div>
              ))}
              <button className={styles.button}>저장</button>
            </form>
          )}
        </dl>
      </dd>
    </dl>
  );
}

export default DescriptionList;
