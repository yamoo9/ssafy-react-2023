// ------------------------------------------------------------------------------
// 📌 인터페이스 확장 (Extending Interfaces)
// ⭐️ URL : https://bit.ly/3O0MA4y
// ------------------------------------------------------------------------------
// - 타입 별칭과 달리, 인터페이스는 다른 인터페이스를 확장할 수 있습니다.
// ------------------------------------------------------------------------------

// Mouse 인터페이스를 확장하는 방법으로 VerticalTypeMouse 인터페이스를 구현합니다.

{
  interface Mouse {
    x: number;
    y: number;
  }

  interface Mouse {
    hasWheel: boolean;
  }

  interface VerticalTypeMouse {
    x: number;
    y: number;
    hasWheel: boolean;
    direction: 'Vertial';
  }

  const myMouse: VerticalTypeMouse = {
    x: 0,
    y: 0,
    hasWheel: false,
    direction: 'Vertial',
  };
}
