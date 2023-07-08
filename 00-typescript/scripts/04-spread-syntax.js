"use strict";
// --------------------------------------------------------------------------
// 전개 구문 (spread syntax)
// 전개 연산자 (...)
{
    function run() {
        combineArray(); // 배열 합성
        // combineObject(); // 객체 합성
    }
    function combineArray() {
        const numberList = [2, -2, 1]; // Array<number> , number[]
        const countList = [101, 201, 301];
        let combineList = countList
            .slice(0, 2)
            .concat(numberList)
            .concat(countList.slice(2));
        // 배열 복제
        // slice, map, forEach, filter, ...
        // 배열 push, pop, sort, ...
        combineList = [
            ...countList.slice(0, 2),
            ...numberList,
            // countList[countList.length - 1],
            ...countList.slice(2),
        ];
        // [ 101, 201, 2, -2, 1, 301 ]
        console.log(combineList);
    }
    function combineObject() {
        const defaultOptions = {
            startIndex: 0,
            loop: false,
            usingAria: true,
        };
        const customOptions = {
            loop: true,
            // startIndex: 0,
            // usingAria: true,
        };
        let combineOptions = Object.assign({}, defaultOptions, customOptions);
        console.log(combineOptions);
        combineOptions = Object.assign(Object.assign({}, defaultOptions), customOptions);
        console.log(combineOptions);
    }
    run();
}
