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
    startIndex?: number;
    loop?: boolean;
    usingAria?: boolean;
  }

  function combineObject() {
    const defaultOptions: Options = {
      startIndex: 0,
      loop: false,
      usingAria: true,
    };

    const customOptions: Options = {
      loop: true,
      // startIndex: 0,
      // usingAria: true,
    };

    let combineOptions = Object.assign({}, defaultOptions, customOptions);
    console.log(combineOptions);
    combineOptions = { ...defaultOptions, ...customOptions };
    console.log(combineOptions);
  }

  run();
}
