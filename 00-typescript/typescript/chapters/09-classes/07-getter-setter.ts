// @ts-nocheck

// ------------------------------------------------------------------------------
// 📌 게터 & 세터 (Getter & Setter)
// ⭐️ URL : https://bit.ly/3GbEdRA
// ------------------------------------------------------------------------------
// - 게터, 세터를 사용해 비공개 프로퍼티 조합을 읽거나, 쓸 수 있도록 구성할 수 있습니다.
// ------------------------------------------------------------------------------

// score 프로퍼티를 읽을 수 있도록 설정합니다.
// 단, 직접 score 프로퍼티 값을 수정할 수는 없습니다.

// fullName 프로퍼티를 구성합니다.
// - getter를 사용해 `role nickname` 조합 값을 반환하도록 합니다.
// - setter를 사용해 role 또는 nickname 값을 수정할 수 있도록 구현합니다.

// FullName 타입 별칭이 필요한 경우 추가합니다.

{
  class Player {
    constructor(
      private readonly nickname: string,
      private readonly role: string,
      private score: number = 0
    ) {
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

  console.log(yamoo9.score);
  console.log(yamoo9.fullName);
}
