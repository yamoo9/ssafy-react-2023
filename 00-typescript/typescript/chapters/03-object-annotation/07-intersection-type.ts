// ------------------------------------------------------------------------------
// 📌 인터섹션 타입 (Intersection Types)
// ⭐️ URL : https://bit.ly/3UUbGnW
// ------------------------------------------------------------------------------
// - 타입 별칭마다 중복적으로 지정된 프로퍼티를 관리하기 보다는, 교차하여 관리하는 것이 좋습니다.
// ------------------------------------------------------------------------------

// User, Worker 타입 별칭을 교차해 Member 타입 별칭을 설정해봅니다.

{
  type User = {
    readonly id: string;
    name: string;
    age: number;
  };

  type Worker = {
    readonly id: string;
    name: string;
    age: number;
    job: string;
    role: string;
    career: number;
  };

  type Member = {
    readonly id: string;
    name: string;
    age: number;
    job: string;
    role: string;
    career: number;
    isAdmin: boolean;
  };

  const inho: User = {
    id: 'user-k291',
    name: '인호',
    age: 23,
  };

  const sumin: Worker = {
    id: 'worker-i782',
    name: '수민',
    age: 31,
    job: '마케터',
    role: '팀장',
    career: 8,
  };

  const master: Member = {
    id: 'administrator',
    name: '박인정',
    age: 49,
    job: '개발자',
    role: '수석',
    career: 12,
    isAdmin: true,
  };
}
