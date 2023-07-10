import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App';

const rootElement = document.getElementById('root');

// [개발 모드 활성 : React에서 컴포넌트의 순수함을 확인하는 방법]
// 참고: https://react.dev/reference/react/StrictMode
// INPUT (props) -> COMPONENT -> OUTPUT (JSX) ⌝
//                                         동일해야 함
// INPUT (props) -> COMPONENT -> OUTPUT (JSX) ⌟

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
