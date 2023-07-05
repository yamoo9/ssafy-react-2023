// @ts-nocheck

// ------------------------------------------------------------------------------
// 📌 매개변수 프로퍼트 단축 (Parameters Properties Shorthand)
// ⭐️ URL : https://bit.ly/3XbJrmL
// ------------------------------------------------------------------------------
// - 생성자 매개변수와 인스턴스 프로퍼티 이름이 동일하다면 단축 표기법을 사용할 수도 있습니다.
// ------------------------------------------------------------------------------

// 단축 표기법을 사용해 모든 프로퍼티를 생성자의 매개변수로 재구성합니다.

{
  class Player {
    public readonly nickname: string;
    public readonly role: string;
    private score: number = 0;

    constructor(nickname: string, role: string) {
      this.nickname = nickname;
      this.role = role;
      this.boostScoreUp();
    }

    private boostScoreUp(): void {
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
