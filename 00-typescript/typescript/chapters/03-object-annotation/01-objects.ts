// @ts-nocheck

// ------------------------------------------------------------------------------
// 📌 객체 에너테이션 (Object Annotation)
// ⭐️ URL : https://bit.ly/3UAwJMj
// ------------------------------------------------------------------------------
// - 객체의 모양(look like)을 에너테이션하여 정의되지 않은 프로퍼티에 접근을 시도하거나,
//   지정된 타입과 다른 타입을 값으로 설정 시도할 경우 오류를 출력합니다.
// ------------------------------------------------------------------------------

{
  const jaeho = {
    name: '재호',
    gender: '남성',
    isMarried: false,
    age: 24,
  };

  console.log(jaeho.friends);
}

{
  const suyeon: /* 객체 에너테이션 */ {
    name: string;
    gender: string;
    isMarried: boolean;
    age: number;
  } = /* 값(객체) */ {
    name: '수연',
    gender: '여성',
    isMarried: true,
    age: 36,
  };
}

{
  function getName(user): string {
    return `${user.firstName} ${user.lastName}`;
  }

  // 아래 함수 실행 구문이 오류가 발생하지 않는 이유는 무엇일까요?
  // 오류가 발생하도록 getName 함수의 매개변수 에너테이션을 지정해봅니다.
  let userName = getName({
    name: '하성연',
  });

  console.log(userName);
}

{
  // coordinate 객체의 에너테이션을 설정합니다.
  let coodinate = {
    x: 100,
    y: -20,
    z: 0,
  };

  const getRandomMinMax = (min: number, max: number): number =>
    Math.round(Math.random() * max - min) + min;

  // getRandomCoordinate 함수의 반환 값 타입을 에너테이션 설정합니다.
  function getRandomCoordinate(
    x: number = getRandomMinMax(-10, 10),
    y: number = getRandomMinMax(-10, 10),
    z: number = getRandomMinMax(-10, 10)
  ) {
    return { x, y, z };
  }
}
