// @ts-nocheck

// ------------------------------------------------------------------------------
// 📌 읽기전용 클래스 필드 (Readonly Class Fields)
// ⭐️ URL : https://bit.ly/3TxbA4C
// ------------------------------------------------------------------------------
// - 일부 인스턴스 프로퍼티를 읽기전용으로 설정할 수 있습니다.
// ------------------------------------------------------------------------------

// nickname, role 인스턴스 프로퍼티 값을 생성 이후 변경할 수 없도록 읽기전용으로 설정합니다.

{
  class Player {
    nickname: string;
    role: string;
    score: number = 0;

    constructor(nickname: string, role: string) {
      this.nickname = nickname;
      this.role = role;
    }

    scoreUp(point: number): void {
      this.score += point;
    }

    scoreDown(point: number): void {
      this.score -= point;
    }
  }

  const yamoo9 = new Player('yamoo9', '멘토');

  // 🚨 Player 객체 생성 이후 nickname, role 변경이 되서는 안됩니다!
  yamoo9.nickname = 'employer';
  yamoo9.role = 'CEO';

  yamoo9.scoreUp(20);
  console.log(yamoo9.score);

  yamoo9.scoreDown(12);
  console.log(yamoo9.score);
}
