let customers = [];
let customers = [
  {
    name: "Emily Carter",
    email: "emily.carter@email.com",
    purchases: ["Laptop", "Mouse"]
  },
  {
    name: "Sohil Desai",
    email: "sohil.desai@email.com",
    purchases: ["Monitor", "USB Cable", "Desk Lamp"]
  },
  {
    name: "Michael Brown",
    email: "michael.brown@email.com",
    purchases: ["Keyboard"]
  }
];
customers.push({
  name: "Sarah Davis",
  email: "sarah.davis@email.com",
  purchases: ["Tablet"]
});

customers.shift();
customers[0].email = "sohil.updated@email.com";

customers[1].purchases.push("Wireless Headphones");
customers.forEach(function(customer) {
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log("----------------------");
});
