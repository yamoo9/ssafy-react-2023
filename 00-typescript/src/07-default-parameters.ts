// --------------------------------------------------------------------------
// default parameters

{
  const randomNumber = (min: number = 0, max: number = 10): number => {
    return Math.round(Math.random() * (max - min)) + min;
  };

  let n1 = randomNumber();
  console.log(n1);

  let n2 = randomNumber(5);
  console.log(n2);

  let n3 = randomNumber(5, 7);
  console.log(n3);
}
