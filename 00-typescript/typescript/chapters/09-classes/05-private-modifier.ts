// ------------------------------------------------------------------------------
// 📌 비공개 접근 제어자 (Private Access Modifier)
// ⭐️ URL : https://bit.ly/3X21tra
// ------------------------------------------------------------------------------
// - 일부 인스턴스 프로퍼티의 경우, 비공개(private)로 설정해 외부에서 접근을 제한합니다.
// ------------------------------------------------------------------------------

// score 인스턴스 프로퍼티를 외부에서 접근할 수 없도록 설정합니다.
// boostScoreUp 인스턴스 프로퍼티를 외부에서 접근할 수 없도록 설정합니다.

{
  class Player {
    public readonly nickname: string;
    public readonly role: string;
    public score: number = 0;

    constructor(nickname: string, role: string) {
      this.nickname = nickname;
      this.role = role;
      this.boostScoreUp();
    }

    public boostScoreUp(): void {
      this.score += 100;
    }

    public scoreUp(point: number): void {
      this.score += point;
    }

    public scoreDown(point: number): void {
      this.score -= point;
    }
  }

  const yamoo9 = new Player('yamoo9', '멘토');

  yamoo9.boostScoreUp();
  console.log(yamoo9.score);
}
