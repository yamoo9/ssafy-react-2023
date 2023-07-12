import '../styles/ScrollButton.css';

function ScrollButton({ mode, label }) {
  const isDown = mode === 'down';
  const buttonLabel = label ?? `스크롤 ${isDown ? '다운' : '업'}`;

  return (
    <button
      type="button"
      className={isDown ? 'scrollDown' : 'scrollUp'}
      aria-label={buttonLabel}
      title={buttonLabel}
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
  );
}

ScrollButton.defaultProps = {
  mode: 'down',
  label: '스크롤 다운',
};

ScrollButton.propTypes = {
  // 컴포넌트 Props 매뉴얼 검사
  mode(props, propName, componentName) {
    // 검사 코드 작성
    const value = props[propName];
    const valueType = typeof value;
    // 전달된 prop 타입 검사 후, 타입이 일치하지 않을 경우 오류 발생
    if (valueType !== 'string') {
      throw new Error(
        `${componentName} 컴포넌트에 전달된 "${propName}" prop은 기대되는 타입이 "string"이나, 실제 전달된 타입은 "${valueType}"입니다.`
      );
    }
  },
  label(props, propName, componentName) {
    // 검사 코드 작성
    const value = props[propName];
    const valueType = typeof value;
    // 전달된 prop 타입 검사 후, 타입이 일치하지 않을 경우 오류 발생
    if (valueType !== 'string') {
      throw new Error(
        `${componentName} 컴포넌트에 전달된 "${propName}" prop은 기대되는 타입이 "string"이나, 실제 전달된 타입은 "${valueType}"입니다.`
      );
    }
  },
};

ScrollButton.Group = function ScrollButtonGroup({ onScroll, children }) {
  return (
    <div role="group" className="ScrollButtonGroup" onClick={onScroll}>
      {children}
    </div>
  );
};

export default ScrollButton;
