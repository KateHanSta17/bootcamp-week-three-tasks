// WRITE YOUR CODE BELOW
// Objects are a collection of properties
const customerDrink = {
    // Properties are made up of key-value pairs
    name: 'Kate',
    milk: 'soy',
    sugars: 1,
    ready: false,
  };
  
  customerDrink.ready = true
  
  // To access a property's value that is a string, number or boolean, use the object's name and the associated key
  // Uses dot notation and logs 'Earth'
  console.log(customerDrink.name);
  console.log(customerDrink.sugars);

  if (customerDrink.ready) {
    console.log(`Ready for Pick-Up`);
  }
  