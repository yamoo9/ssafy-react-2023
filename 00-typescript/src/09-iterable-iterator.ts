// --------------------------------------------------------------------------
// iterable → iterator
//
// 이터러블 프로토콜(iterable protocol) 조건
// - iterable[Symbol.iterator] 메서드를 가진 객체
//
// 이터레이션 프로토콜(iterator protocol) 조건
// - next 메서드를 가진 객체
// - next 메서드를 실행하면 { done: boolean, value: any } 반환
// - done 값이 false 인 경우 다음 순환 가능 value 반환
// - done 값이 true 인 경우 다음 순환 없음 value는 undefined
// --------------------------------------------------------------------------

{
  // 내장된 String Iterable
  let iterable = '나 커피 사줘';

  // Iterable 조건은 [Symbol.iterator] 메서드를 가짐
  // console.log(typeof iterable[Symbol.iterator]);

  // Iterable의 [Symbol.iterator] 메서드를 실행하면 Iterator 반환
  const iterator: IterableIterator<string> = iterable[Symbol.iterator]();

  // Iterator 조건은 next 메서드를 가짐
  // console.log(typeof iterator.next);

  // Iterator의 next 메서드가 실행되면 { done, value } 반환
  // done 값이 true인 경우 순환 종료
  for (let i = 0; i <= iterable.length; i++) {
    // console.log(iterator.next());
  }

  // --------------------------------------------------------------------------
  // for ~ of 문
  //
  // - 이터러블을 순환해 이터레이터 값을 추출해 사용할 수 있습니다.
  // - 예시 코드를 여기에 작성합니다.

  for (const iteratorValue of iterable) {
    console.log(iteratorValue);
  }

  // --------------------------------------------------------------------------
  // 이터러블과 전개 연산자
  //
  // - 배열 내부에 이터러블을 전개하면 이터레이터 값을 나열할 수 있습니다.
  // - 예시 코드를 여기에 작성합니다.

  console.log([...iterable]);

  // --------------------------------------------------------------------------
  // 내장된 이터러블
  //
  // - String
  // - Array
  // - Set
  // - Map

  // Array
  const coffee = ['espresso', 'americano', 'latte', 'cappuccino'];
  console.log(typeof coffee[Symbol.iterator]);

  // Set
  const coffeeTypes = new Set([
    ...coffee,
    ...['robusta', 'liberica', 'arabica'],
    ...coffee,
  ]);

  console.log(coffeeTypes);
  console.log(coffeeTypes[Symbol.iterator]);
  console.log(Array.isArray([...coffeeTypes]));

  // Map
  let primaryColor = '#fa5252';
  const cssEntries = Object.entries({
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: '20px',
    margin: '0 auto',
    border: `2px solid ${primaryColor}`,
    padding: '2em',
    color: `${primaryColor}`,
    background: 'transparent',
    fontSize: '14px',
  });

  const cssMap = new Map(cssEntries);
  console.log(cssMap);

  // for ~ of 문을 사용해 이터러블인 cssMap을 순환하여 key, value를 출력해봅니다.
  // - 예시 코드를 여기에 작성합니다.

  for (const [key, value] of cssMap) {
    console.log({ key, value });
  }

  // --------------------------------------------------------------------------
  // 커스텀 이터러블
  //
  // - [Symbol.iterator] 메서드를 가진 객체
  // - [Symbol.iterator] 메서드는 next 메서드를 가진 객체를 반환
  // - next 메서드가 실행되면 { done, value } 객체 반환

  const customIterable = {
    _i: 0,
    _distance: 1,
    _max: 100,
    [Symbol.iterator]() {
      let { _i: i, _distance: distance, _max: max } = this;

      return {
        next() {
          if (i < max) {
            const returnValue = { done: false, value: i };
            i += distance;
            return returnValue;
          } else {
            return { done: true, value: undefined };
          }
        },
      };
    },
  };

  // customIterable 이터러블의 값을 나열한 배열을 작성한 후 Console에 출력합니다.
  // - 예시 코드를 여기에 작성합니다.

  console.log([...customIterable]);

  // for ~ of 문을 사용해 customIterable 이터러블을 순환해 값을 Console에 출력합니다.
  // - 예시 코드를 여기에 작성합니다.

  for (const value of customIterable) {
    console.log(value);
  }
}
