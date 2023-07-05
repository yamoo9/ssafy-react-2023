// @ts-nocheck

// ------------------------------------------------------------------------------
// 📌 클래스 필드 (Class Fields)
// ⭐️ URL : https://bit.ly/3AdXi1I
// ------------------------------------------------------------------------------
// - 클래스 필드 구문을 사용해 인스터스 프로퍼티를 구성 또한 타입 에너테이션이 필요합니다.
// ------------------------------------------------------------------------------

// 클래스 필드 구문을 사용해 score 타입과 초깃값을 지정하고,
// scoreUp, scoreDown 인스턴스 메서드도 정의한 후 타입 에너테이션을 설정합니다.

{
  class Player {
    nickname: string;
    role: string;

    constructor(nickname: string, role: string) {
      this.nickname = nickname;
      this.role = role;
    }
  }

  const yamoo9 = new Player('yamoo9', '멘토');

  yamoo9.scoreUp(20);
  console.log(yamoo9.score);

  yamoo9.scoreDown(12);
  console.log(yamoo9.score);
}
