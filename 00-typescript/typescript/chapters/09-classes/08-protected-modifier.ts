// @ts-nocheck

// ------------------------------------------------------------------------------
// 📌 프로텍트 접근 제어자 (Protected Access Modifier)
// ⭐️ URL : https://bit.ly/3X01Qmo
// ------------------------------------------------------------------------------
// - 외부에서는 접근이 불가능하지만, 서브 클래스에서는 접근 가능하도록 접근 제어를 설정할 수 있습니다.
// ------------------------------------------------------------------------------

// AdvancedPlayer 클래스에서 Player 클래스의 _score 프로퍼티에 접근할 수 있도록 조정합니다.

{
  type FullName = { role: string; nickname: string } | string;

  class Player {
    private _score: number;

    constructor(
      private nickname: string,
      private role: string,
      score: number = 0
    ) {
      this._score = score;
      this.boostScoreUp();
    }

    get score() {
      return this._score;
    }

    get fullName() {
      const { nickname, role } = this;
      return `${role} ${nickname}`;
    }

    set fullName(options: FullName) {
      if (typeof options === 'string') {
        const [role, nickname] = options.split(' ');
        this.role = role;
        this.nickname = nickname;
      } else {
        const { role, nickname } = options;
        this.role = role;
        this.nickname = nickname;
      }
    }

    private boostScoreUp(): void {
      this._score += 100;
    }

    public scoreUp(point: number): void {
      this._score += point;
    }

    public scoreDown(point: number): void {
      this._score -= point;
    }
  }

  class AdvancedPlayer extends Player {
    public hasSuperPower: boolean = true;

    fullScoreUp() {
      this._score = 99999;
    }
  }

  const yamoo9 = new AdvancedPlayer('yamoo9', '멘토');

  yamoo9.fullScoreUp();
  console.log(yamoo9.score);
}
