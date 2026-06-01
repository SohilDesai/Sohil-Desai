// Step 1: Create and Initialize Variables
let productName = "Wireless Mouse";

let costPerUnit = 12.50;
let basePrice = 19.99;
let discountRate = 0.15; // 15% discount
let salesTaxRate = 0.07; // 7% sales tax
let fixedMonthlyCosts = 500.00;

// Step 2: Calculate Pricing & Profit Metrics
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

// Step 3: Print to Console
console.log("Product Name:", productName);
console.log("Discounted Price (Before Tax): $" + discountedPrice.toFixed(2));
console.log("Final Price With Tax: $" + finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-Even Units:", breakEvenUnits);
console.log("Per-Unit Profitability:", isProfitablePerUnit);
