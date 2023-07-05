// ------------------------------------------------------------------------------
// 📌 읽기전용 프로퍼티 (Readonly Properties)
// ⭐️ URL : https://bit.ly/3EoL9sn
// ------------------------------------------------------------------------------
// - 객체에 지정된 에너테이션 중 일부를 읽기 전용(readonly)으로 설정할 수 있습니다.
// ------------------------------------------------------------------------------

// Member 타입 별칭의 id 프로퍼티를 읽기 전용으로 설정해 임의로 수정할 수 없도록 합니다.

{
  type Member = {
    id: string;
    name: string;
    age: number;
    job?: string;
    isAdmin: boolean;
  };

  const guest: Member = {
    id: 'guest-101',
    name: '이철용',
    age: 17,
    isAdmin: false,
  };

  guest.id = 'administrator-ze82Kd';

  const administrator: Member = {
    id: 'administrator-ze82Kd',
    name: '관리자',
    age: 56,
    isAdmin: true,
  };

  administrator.id = 'guest-101';
}
