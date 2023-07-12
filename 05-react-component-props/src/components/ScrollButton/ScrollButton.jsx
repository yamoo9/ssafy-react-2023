/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import './ScrollButton.css';

// 어떤 props (외부에서 전달받는 데이터)를 가져와 데이터 바인딩 할 것인가?
// 0. mode or type : 'up' | 'down'
// 1. props.label
// 2. props.className

function ScrollButton({ mode = 'down', label, className }) {
  // 지역 변수 설정
  const isDownMode = mode.includes('down');
  const buttonClassName = className ?? (isDownMode ? 'scrollDown' : 'scrollUp');
  const buttonLabel = label ?? (isDownMode ? '스크롤 다운' : '스크롤 업');

  return (
    <button
      type="button"
      className={buttonClassName}
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

// 2015 (ES6)
// default parameters
// ScrollButton.defaultProps = {
//   mode: 'down'
// }

// 컴파운드 컴포넌트 패턴
// 화살표 함수가 아닌, 함수 선언을 사용한 이유 (개발 도구에서의 표시 이름 설정)
// <ScrollButton.Group />
ScrollButton.Group = function ScrollButtonGroup({ children }) {
  const handleScrollMove = ({ currentTarget, target }) => {
    const { top } = currentTarget.getBoundingClientRect();
    const appElement = document.querySelector('.App');

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

  return (
    <div role="group" className="buttonGroup" onClick={handleScrollMove}>
      {children}
    </div>
  );
};

// ScrollButton.Group.displayName = 'ScrollButtonGroup';

// export function ScrollButtonGroup({ children }) {
//   const handleScrollMove = ({ currentTarget, target }) => {
//     const { top } = currentTarget.getBoundingClientRect();
//     const appElement = document.querySelector('.App');

//     if (target.matches('.scrollDown')) {
//       appElement.scroll({
//         top,
//         behavior: 'smooth',
//       });
//     }
//     if (target.matches('.scrollUp')) {
//       appElement.scroll({
//         top: 0,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div role="group" className="buttonGroup" onClick={handleScrollMove}>
//       {children}
//     </div>
//   );
// }

export default ScrollButton;
