"use strict";
function calculateTax(incom, taxYear = 2022) {
    if (taxYear < 50000)
        return incom * 1.2;
    return incom * 1.3;
}
calculateTax(10000, 2023);
//# sourceMappingURL=index.js.map