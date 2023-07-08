// --------------------------------------------------------------------------
// 전개 구문 (spread syntax)
// 전개 연산자 (...)

{
  function run() {
    combineArray(); // 배열 합성
    // combineObject(); // 객체 합성
  }

  function combineArray() {
    const numberList: number[] = [2, -2, 1]; // Array<number> , number[]
    const countList: Array<number> = [101, 201, 301];
    let combineList: number[] = countList
      .slice(0, 2)
      .concat(numberList)
      .concat(countList.slice(2));

    // 배열 복제
    // slice, map, forEach, filter, ...
    // 배열 push, pop, sort, ...
    combineList = [
      ...countList.slice(0, 2),
      ...numberList,
      // countList[countList.length - 1],
      ...countList.slice(2),
    ];

    // [ 101, 201, 2, -2, 1, 301 ]
    console.log(combineList);
  }

  // custom type vs. interface
  // optional
  interface Options {
    // 옵셔널로 만들어주는 것  = ? 붙이면 된다
    startIndex?: number;
    loop?: boolean;
    usingAria?: boolean;
  }

  // ? = 옵셔널 = 불리언 또는 언디파인 값이 들어올 수 있구나!

  function combineObject() {
    const defaultOptions: Options = {
      startIndex: 0,
      loop: false,
      usingAria: true,
    };

    const customOptions: Options = {
      loop: true,
      // startIndex: 0,  -> options interface에 따라 필수기 때문에 꼭 설정해줘야 한다고 경고창이 뜬다
      // 따라서 옵셔널로 만들면(값 뒤에 ? 붙이기)-->interface Options~ 부분
      // usingAria: true,
    };

    let combineOptions = Object.assign({}, defaultOptions, customOptions);
    console.log(combineOptions);
    combineOptions = { ...defaultOptions, ...customOptions };
    console.log(combineOptions);
  }

  run();
}
