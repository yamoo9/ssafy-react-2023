"use strict";
// --------------------------------------------------------------------------
// arrow function
{
    function run() {
        let price = currencyKR(2107000);
        console.log(price);
    }
    const currencyKR = (value) => {
        if (typeof value !== 'number' || Number.isNaN(value)) {
            throw new Error('currencyKR 함수에는 숫자 값만 전달해야 합니다.');
        }
        let price = numberWithComma(value);
        return `${price}원`;
    };
    const numberWithComma = (value) => { var _a, _b; return (_b = (_a = value.toString()).replace) === null || _b === void 0 ? void 0 : _b.call(_a, /(\d)(?=(\d{3})+(?!\d))/g, '$1,'); };
    run();
}
