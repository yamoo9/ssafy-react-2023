// ------------------------------------------------------------------------------
// 📌 공개 접근 제어자 (Public Access Modifier)
// ⭐️ URL : https://bit.ly/3WXxReH
// ------------------------------------------------------------------------------
// - 기본적으로 인스턴스 프로퍼티는 공개(public)적으로 접근 가능합니다.
// - 명시적으로 공개 상태를 표현할 경우 public 접근 제어자를 사용합니다.
// ------------------------------------------------------------------------------

// 모든 인스턴스 프로퍼티를 명시적으로 public 접근 제어자로 설정합니다.

{
  class Player {
    readonly nickname: string;
    readonly role: string;
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

  yamoo9.scoreUp(20);
  console.log(yamoo9.score);

  yamoo9.scoreDown(12);
  console.log(yamoo9.score);
}
