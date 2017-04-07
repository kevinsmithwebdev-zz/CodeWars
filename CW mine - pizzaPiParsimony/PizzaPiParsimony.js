/* ******************************
You love pizza, almost a much as you love saving money. You want a program that will test which is the best pizza deal, by size. Your function will recieve an array of objects. Every object will have a properties of "size", "diameter", and "price". There will be an optional property of "coupon". The "size" will always be a string, diameter will always be a number (inches), and price and coupon will always be a number of no more than two decimal places (dollars). Coupons will be given as positive numbers. We will assume that you like the crust as much as the center of the pizza so that won't be a factor. For comparing, the price per square inch should be rounded up to the nearest cent (dollar to two decimal places).

You need to figure out the price per square inch of each pizza and figure out which is the best deal. If more than one size has the same price per square inch, then you should return the smallest size of that group.
****************************** */

function pizzaCompare(menu) {
  var thisPrice;
  var sqrInches;
  for (var i = 0 ; i < menu.length ; i++) {
    thisPrice = menu[i].price -
        (menu[i].coupon?menu[i].coupon:0);
    sqrInches = Math.PI * Math.pow(menu[i].diameter/2,2);
    menu[i].pricePerSqrInch =
        Math.ceil((thisPrice*100)/sqrInches)/100;
  }

  menu.sort(function(a, b) {
    if (a.pricePerSqrInch == b.pricePerSqrInch) {
      return a.diameter - b.diameter;
    } else {
      return a.pricePerSqrInch - b.pricePerSqrInch;
    }
  });
  return "The best deal is the " + menu[0].size + "!";
}

var menu = [
  { size: 'extra large', diameter: 15, price: 22.50 },
  { size: 'large', diameter: 12, price: 17, coupon: 2 },
  { size: 'medium', diameter: 10, price: 12, coupon: 3 },
  { size: 'small', diameter: 8, price: 10.06, coupon: 1 }
]
console.log(pizzaCompare(menu));


var num = 10;

var menu = [];
var priceL, priceM, priceS;
var sizeL, sizeM, sizeS;
var coupL, coupM, coupS;

for (var i = 0 ; i < num ; i++) {
  // randomly +/- 10%
  priceL = 19.50 * (1 + ((Math.random()-.5)/5));
  priceM = 14.50 * (1 + ((Math.random()-.5)/5));
  priceS = 10.00 * (1 + ((Math.random()-.5)/5));
  sizeL = 12 * (1 + ((Math.random()-.5)/5));
  sizeM = 10 * (1 + ((Math.random()-.5)/5));
  sizeS = 8 * (1 + ((Math.random()-.5)/5));
  // 10% chance of a coupon, $1-$3
  coupL = (Math.random()<.9)?0:Math.ceil(Math.random()*3);
  coupM = (Math.random()<.9)?0:Math.ceil(Math.random()*3);
  coupS = (Math.random()<.9)?0:Math.ceil(Math.random()*3);

  menu = [
    {size: "large", diameter: sizeL, price: priceL, coupon: coupL},
    {size: "medium", diameter: sizeM, price: priceM, coupon: coupM},
    {size: "small", diameter: sizeS, price: priceS, coupon: coupS},
  ]
 console.log(pizzaCompare(menu));
}
