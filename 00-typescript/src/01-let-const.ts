// --------------------------------------------------------------------------
// ECMAScript 2015 (v6)
// let, const (block scope)

{
  for (let i = 0, numbers = [3, 6, 9, 12]; i < numbers.length; ++i) {
    // ...
    console.log(i); //
  }

  // console.log(i);    //바깥쪽에서 쓰면 읽어올 수 없음
}
