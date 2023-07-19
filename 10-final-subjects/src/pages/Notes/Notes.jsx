// React 함수 컴포넌트 "순수"
// 인풋 → 함수 → 아웃풋
// 인풋 → 함수 → 아웃풋
// 사이드 이펙트를 가져서는 안된다.

import { useEffect, useRef, useState } from 'react';

function Notes() {
  // 컴포넌트 상태 관리
  const [count, setCount] = useState(0);

  // 사이드 이펙트
  // 조건 처리
  // 마운트 시점에 1회 서버에 요청/응답
  useEffect(
    /* 1. effect callback */
    () => {
      const controller = new AbortController();

      // 요청 신호
      // ... 요청 취소
      // 응답

      // 이 함수는 언제 콜백되나? // 렌더링 이후 시점에 실행
      // 네트워크 요청/응답
      fetch('https://jsonplaceholder.typicode.com/posts', {
        signal: controller.signal,
      })
        .then((response) => response.json())
        .then(() => {
          // 상태 업데이트

          // 방법 1.
          // setCount(count + 1);

          // 방법 2.
          setCount((prevCount) => prevCount + 1);
        })
        .catch(() => {
          // console.error(error.message)
        });

      /* 3. cleanup function */
      // 언제 실행되는가? 마운트 해제될 때
      return () => {
        controller.abort();
      };
    },
    /* 2. dependencies list */
    []
  );

  const headlineRef = useRef(null); // mutable object: { current: null }

  useEffect(() => {
    // 마운트 이후에 콜백
    // DOM 요소 접근/조작
    // 모든 접근성 준수는 반드시 사이드 이펙트로 처리

    // 초점 이동
    headlineRef.current.setAttribute('tabindex', -1);
    headlineRef.current.focus();
  }, []);

  return (
    <div className="my-5 flex h-screen items-center justify-center bg-slate-700 px-10 text-slate-100">
      <h2 ref={headlineRef} className="text-4xl ring-rose-700 focus:ring-2">
        Notes ({count})
      </h2>
    </div>
  );
}

export default Notes;
