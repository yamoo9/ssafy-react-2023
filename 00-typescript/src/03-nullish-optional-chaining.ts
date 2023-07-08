// --------------------------------------------------------------------------
// operators (nullish, optional chaining)

{
  function run() {
    // nullish();
    optionalChaining();
  }

  function nullish() {
    let value = 0; // undefined

    let result: number | undefined = value || 100;
    console.log("|| : ", result);
    // 문제를 일으킬 수 있는 코드, 아래쪽 처럼 쓰기

    function isNullOrUndefined(value: unknown) {
      return value === null || value === undefined ? true : false;
    }
    // ====================================================================
    result = !isNullOrUndefined(value) ? value : 100;
    console.log("isNullOrUndefined : ", result);

    // 코드를 작성합니다.
    // null 병합 연산자 활용 = 물음표 두개
    result = value ?? 100;
    console.log("nullish : ", result);
  }

  // 사용자 정의 타입 = Type
  type Topic = {
    _title: string;
    getTitle(): string;
    setTitle(value: string): void;
    getName?: () => string; // function | undefined
  };

  function optionalChaining() {
    const topic: Topic = {
      _title: "매년 업데이트 되는 ECMAScript",
      getTitle() {
        return this._title;
      },
      setTitle(value) {
        this._title = value;
      },
    };

    if (topic && typeof topic === "object" && !Array.isArray(topic)) {
      let title, name;
      if (typeof topic.getTitle === "function") {
        title = topic.getTitle();
      }
      // if (typeof topic.getName === 'function') {
      // name = topic.getName();
      // }
      console.log("typeof : ", title);
      console.log("typeof : ", name);

      // 코드를 작성합니다. if 블럭을 사용해서 옵션을 확인하지 않아도 optional chaning연산자를 사용하면 효율적으로
      //  전달받은 그 속성이 함수일 때만 수행 가능
      name = topic.getName?.();
    }

    let title, name;
  }

  run();
}
