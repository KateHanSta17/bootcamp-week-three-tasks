// TODO: What does 'this' refer to?
console.log(this);
// the global object. Inside the object is the window.

// TODO: What does 'this' refer to?
function helloThis() {
  console.log(`Inside this function, this is ${this}`);
}
// "This" refers the object window
// A function can be inside of an object

// TODO: What will this log?
const child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// 20 (child is replaced by "this". So age +10 = 20)

// TODO: What will this log?
const investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// "This" times initial investment by 1.15* to give us 5750. "This" refers to the object you are currently inside of.

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
