import '../styles/DescriptoinList.css';
import vitePath from '../assets/vite.svg';
import reactPath from '/react.svg';

interface Props {
  statusMessage: string[];
  imageType: 'react' | 'vite';
  isShowReactImage: boolean;
  renderList: ({
    isReverse,
  }?: {
    isReverse?: boolean | undefined;
  }) => React.ReactNode[];
  reactLibrary: {
    [key: string]: string;
  };
}

/* -------------------------------------------------------------------------- */

function DescriptionList({
  statusMessage,
  imageType,
  isShowReactImage,
  renderList,
  reactLibrary,
}: Props): JSX.Element {
  return (
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
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
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
        <ul className="renderList">{renderList({ isReverse: true })}</ul>
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
  );
}

export default DescriptionList;
