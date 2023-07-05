// @ts-nocheck

// --------------------------------------------------------------------------
// 📌 제네릭 타입 추론 (Inffered Generic)
// ⭐️ URL : https://bit.ly/3G7x8Sd
// --------------------------------------------------------------------------
// - TypeScript는 사용자가 사용한 값을 통해 제네릭의 타입을 추론할 수 있습니다.
// - 하지만 모든 경우에서 타입을 추론할 수 있는 것은 아닙니다.
// --------------------------------------------------------------------------

{
  // 제네릭 타입 추론이 가능한 함수
  function createQueue<T>(initialData?: T[]) {
    const Queue: T[] = initialData ?? [];

    return {
      get queue() {
        return Queue;
      },
      add(item: T): void {
        Queue.push(item);
      },
    };
  }

  // 사용자가 직접 제네릭 타입을 설정해야 하는 경우
  const formElement = document.querySelector('.from');
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
