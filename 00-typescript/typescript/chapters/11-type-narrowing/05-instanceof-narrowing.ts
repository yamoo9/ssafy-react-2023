// @ts-nocheck

// --------------------------------------------------------------------------
// 📌 instanceof 연산자 타입 범위 축소 (instanceof operator narrowing)
// ⭐️ URL : https://bit.ly/3g5zsOP
// --------------------------------------------------------------------------
// - JavaScript 언어의 instanceof 연산자는 데이터가 특정 클래스의 인스턴시인지 확인합니다.
// - 이 연산자를 사용하면 특정 클래스의 인스턴스에만 적용되도록 타입 범위를 축소할 수 있습니다.
// --------------------------------------------------------------------------

{
  // date 타입 중 Date 클래스의 인스턴스 여부를 판별하도록 타입 범위를 축소합니다.
  const printFullDate = (date: string | Date) => {
    return date.toLocaleString();
    return new Date(date).toLocaleString();
  };

  printFullDate(new Date());
  printFullDate('2022. 08. 12');
}

{
  class Employee {
    constructor(public id: string, public fullname: string) {
      this.id = id;
      this.fullname = fullname;
    }
  }

  class Company {
    constructor(public name: string) {
      this.name = name;
    }
  }

  // entity 타입이 어떤 클래스의 인스턴스인지 여부를 판별할 수 있도록 타입 범위를 축소합니다.
  function printName(entity: Employee | Company) {
    return entity.name;
    return entity.fullname;
  }

  printName(new Employee('cikd3zlwj@9', 'yamoo9'));
  printName(new Company('EUID'));
}
