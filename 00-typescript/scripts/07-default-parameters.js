"use strict";
// --------------------------------------------------------------------------
// default parameters
{
    const randomNumber = (min = 0, max = 10) => {
        return Math.round(Math.random() * (max - min)) + min;
    };
    let n1 = randomNumber();
    console.log(n1);
    let n2 = randomNumber(5);
    console.log(n2);
    let n3 = randomNumber(5, 7);
    console.log(n3);
}
