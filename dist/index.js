"use strict";
function calculateTax(incom, taxYear = 2022) {
    if (taxYear < 50000)
        return incom * 1.2;
    return incom * 1.3;
}
calculateTax(10000, 2023);
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
//# sourceMappingURL=index.js.map

