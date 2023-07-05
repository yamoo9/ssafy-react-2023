// @ts-nocheck

// -------------------------------------------------------------------------------
// 📌 타입 별칭 (Type Alias)
// ⭐️ URL : https://bit.ly/3TDq0jw
// -------------------------------------------------------------------------------
// - 타입 에너테이션을 객체에 직접 설정하는 대신, 타입 별칭을 사용해 별도 선언할 수 있습니다.
// - 타입 별칭을 사용하면 코드를 보다 읽기 용이하고, 다른 곳에서 타입 별칭을 재사용할 수 있습니다.
// -------------------------------------------------------------------------------

// 타입 별칭을 사용하지 않은 코드

{
  const suyeon: {
    name: string;
    gender: string;
    isMarried: boolean;
    age: number;
  } = {
    name: '수연',
    gender: '여성',
    isMarried: true,
    age: 36,
  };

  const jaeho: {
    name: string;
    gender: string;
    isMarried: boolean;
    age: number;
  } = {
    name: '재호',
    gender: '남성',
    isMarried: false,
    age: 24,
  };
}

// 타입 별칭을 사용한 코드

{
  type Friend = {
    name: string;
    gender: string;
    isMarried: boolean;
    age: number;
  };

  const suyeon: Friend = {
    name: '수연',
    gender: '여성',
    isMarried: true,
    age: 36,
  };

  const jaeho: Friend = {
    name: '재호',
    gender: '남성',
    isMarried: false,
    age: 24,
  };
}

// 아래 코드에 반복 사용된 객체 에너테이션을 타입 별칭을 활용하는 코드로 변경해봅니다.

{
  let point: { x: number; y: number } = { x: 10, y: 10 };

  const generatePoint = (x: number, y: number): { x: number; y: number } => {
    return { x, y };
  };

  const powPoint = (porint: {
    x: number;
    y: number;
  }): { x: number; y: number } => {
    return {
      x: point.x ** 2,
      y: point.y ** 2,
    };
  };
}

// 타입 별칭을 활용하면 코드를 읽고 수정하기 용이해집니다. 😃

{
  type Point = { x: number; y: number };

  let point: Point = { x: 10, y: 10 };

  const generatePoint = (x: number, y: number): Point => {
    return { x, y };
  };

  const powPoint = (porint: Point): Point => {
    return {
      x: point.x ** 2,
      y: point.y ** 2,
    };
  };
}
