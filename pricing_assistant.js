let productName = "Running Shoes";
let costPerUnit = 45.00;
let basePrice = 79.99;
let discountRate = 0.15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 500.00;
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = profitPerUnit > 0
    ? Math.ceil(fixedMonthlyCosts / profitPerUnit)
    : "Not profitable";

let isProfitablePerUnit = profitPerUnit > 0;
console.log("Product Name:", productName);
console.log("Discounted Price (Before Tax): $" + discountedPrice.toFixed(2));
console.log("Final Price With Tax: $" + finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-Even Units:", breakEvenUnits);
console.log("Per-Unit Profitability:", isProfitablePerUnit);
