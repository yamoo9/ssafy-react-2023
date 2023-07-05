// @ts-nocheck

// --------------------------------------------------------------------------
// 📌 in 연산자 타입 범위 축소 (in operator narrowing)
// ⭐️ URL : https://bit.ly/3Af3bf9
// --------------------------------------------------------------------------
// - JavaScript 언어의 in 연산자는 객체에 특정 속성이 포함되어 있는지 확인할 때 사용합니다.
// - 객체 작업 전에 객체 타입에 따라 특정 값이 포함되었는지 확인할 때 사용할 수 있습니다.
// --------------------------------------------------------------------------

{
  type Cat = {
    name: string;
    meow(): void;
  };

  type Dog = {
    name: string;
    bark(): void;
  };

  const talk = (creature: Cat | Dog) => {
    console.log(creature.name);
    // 크리쳐(creature)가 가진 속성 포함 여부 확인을 위한 타입 범위 축소를 작성합니다.
    creature.meow();
    creature.bark();
  };

  const kitty: Cat = {
    name: '키티',
    meow() {
      console.log('냐옹~');
    },
  };

  talk(kitty);
}

{
  interface Movie {
    title: string;
    duration: number;
  }

  interface TV_Drama {
    title: string;
    numberOfEpisodes: number;
    episodeDuration: number;
  }

  // 무비, TV 드라마 타입 별 상영시간을 문제 없이 반환하도록 타입 범위를 축소합니다.
  function getRuntime(media: Movie | TV_Drama): number | void {
    return media.episodeDuration * media.numberOfEpisodes;
    return media.duration;
  }

  getRuntime({
    title: '시간을 거스르는 남자',
    duration: 62,
  });

  getRuntime({
    title: '우리 마을 이야기',
    numberOfEpisodes: 12,
    episodeDuration: 48,
  });
}
