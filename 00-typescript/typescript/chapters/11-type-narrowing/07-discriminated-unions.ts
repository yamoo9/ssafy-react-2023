// @ts-nocheck

// --------------------------------------------------------------------------
// 📌 디스크리미네이트 유니언 (Discriminated Unions)
// ⭐️ URL : https://bit.ly/3tKdUe9
// --------------------------------------------------------------------------
// - 여러 타입이 유사한 속성으로 구성된 경우, 이를 식별하기 위한 리터럴 속성을 만들 수 있습니다.
// - 리터럴 속성을 사용해 타입 범위를 좁힐 수 있습니다.
// --------------------------------------------------------------------------

{
  interface Rooster {
    name: string;
    age: number;
  }

  interface Cow {
    name: string;
    age: number;
  }

  interface Sheep {
    name: string;
    age: number;
  }

  interface Pig {
    name: string;
    age: number;
  }

  type FarmAnimal = Rooster | Cow | Sheep | Pig;

  // 수탉, 소, 양, 돼지는 모두 유사한 속성으로 구성된 인터페이스를 가집니다.
  // 소유한 속성이 유사하므로 각 동물의 타입을 구분할 방법이 필요합니다.
  // type 리터럴 속성을 추가해 각 동물을 식별할 수 있도록 구성합니다.

  function getFarmAnimalSound(animal: FarmAnimal): string {
    switch (animal.kind) {
      case 'PIG':
        return '🐷 꿀꿀~';
      case 'SHEEP':
        return '🐏 메~ 메~';
      case 'ROOSTER':
        return '🐓 꼬끼오! 꼬~꼬';
      case 'COW':
        return '🐄 음~ 모우~';
      default:
        return '🚨 동물 농장에 속한 동물이 아닙니다.';
    }
  }

  const lucas: Sheep = {
    name: '루카스',
    age: 3,
  };

  getFarmAnimalSound(lucas);
}
