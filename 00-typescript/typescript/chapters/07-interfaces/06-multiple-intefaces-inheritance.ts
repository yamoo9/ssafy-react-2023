// @ts-nocheck

// ------------------------------------------------------------------------------
// 📌 멀티 인터페이스 상속 (Multiple Interface Inheritance)
// ⭐️ URL : https://bit.ly/3O1s5EE
// ------------------------------------------------------------------------------
// - 인터페이스는 하나 이상 인터페이스를 상속(확장)할 수 있습니다.
// ------------------------------------------------------------------------------

// Mouse, VerticalTypeMouse를 상속받는 SpecialMouse 인터페이스를 구현합니다.

{
  interface Mouse {
    x: number;
    y: number;
    hasWheel: boolean;
  }

  interface VerticalTypeMouse {
    direction: 'Vertial';
  }

  interface SpecialMouse {
    releaseDate: number;
  }

  const myMouse: SpecialMouse = {
    x: 100,
    y: 120,
    hasWheel: true,
    direction: 'Vertial',
    releaseDate: 2022,
  };

  console.log(myMouse.releaseDate);
}

// Human, Employee를 상속받는 Developer 인터페이스를 구현합니다.

{
  interface Human {
    name: string;
    age: number;
  }

  interface Employee {
    readonly id: string;
    email: string;
  }

  interface Developer {
    role: string;
    career: number;
    programmingLanguages: string[];
  }

  const teamLeader: Developer = {
    name: '김상호',
    age: 51,
    id: 'employee-dicos',
    email: 'kimsh@employee.io',
    role: '팀장',
    career: 16,
    programmingLanguages: ['TypeScript', 'JavaScript', 'Go', 'Python'],
  };

  console.log(teamLeader.programmingLanguages);
}
