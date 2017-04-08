/* ******************************
You love pizza, almost a much as you love saving money. You want a program that will test which is the best pizza deal, by size. Your function will recieve an array of objects. Every object will have properties of "size", "diameter", and "price". There will be an optional property of "coupon". The "size" will always be a string, diameter will always be a number (inches), and price and coupon will always be a number of no more than two decimal places (dollars). Coupons will be given as positive numbers. We will assume that you like the crust as much as the the pizza so that won't be a factor. For comparing, the price per square inch should be rounded up to the nearest cent (dollar to two decimal places).

The menu may be in any order. The name property is arbitrary and should not be used as an indication of relative size, but the diameter should be used to determine size. Then names will always be unique, but the sizes, prices and coupons may not.

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


// *** example tests
//
// describe("Your function", _ => {
//   it("should work for basic tests", _ => {
//     Test.assertEquals(pizzaCompare(
//         [ { size: "extra large", diameter: 14, price: 21.35 },
//           { size: "large", diameter: 12, price: 18.56 },
//           { size: "medium", diameter: 10, price: 15.08 },
//           { size: "small", diameter: 8, price: 12.06 }
//         ]), "The best deal is the extra large!");
//
//     Test.assertEquals(pizzaCompare(
//         [ { size: "extra large", diameter: 14, price: 21.35 },
//           { size: "large", diameter: 12, price: 18.56 },
//           { size: "medium", diameter: 10, price: 15.08, coupon: 4.50 },
//           { size: "small", diameter: 8, price: 12.06 }
//         ]), "The best deal is the medium!");
//   });
//
//   it("should work for non-ordered menus with unexpected names", _ => {
//     Test.assertEquals(pizzaCompare(
//         [ { size: 'small', diameter: 8, price: 10.06, coupon: 3 },
//           { size: 'large', diameter: 10, price: 14, coupon: 2 },
//           { size: 'gut buster', diameter: 17, price: 24.17 },
//           { size: 'princess', diameter: 6, price: 10.06, coupon: 5},
//           { size: 'medium', diameter: 10, price: 14.15, coupon: 5 },
//           { size: 'triple dog dare', diameter: 19, price: 32.17 }
//         ]), "The best deal is the gut buster!");
//
//     Test.assertEquals(pizzaCompare(
//         [ { size: 'media', diameter: 10.5, price: 10.66},
//           { size: 'grande', diameter: 14, price: 17.76, coupon: 2 },
//           { size: 'piccola', diameter: 8.3, price: 7.99, coupon: 2.50 },
//           { size: 'gigante', diameter: 16, price: 21.12 }
//         ]), "The best deal is the piccola!");
//
//   });
// });




// *** rigorous tests
//
// describe("Your function", _ => {
//   it("should work for basic tests", _ => {
//     Test.assertEquals(pizzaCompare(
//         [ { size: "extra large", diameter: 14, price: 21.35 },
//           { size: "large", diameter: 12, price: 18.56 },
//           { size: "medium", diameter: 10, price: 15.08 },
//           { size: "small", diameter: 8, price: 12.06 }
//         ]), "The best deal is the extra large!");
//     Test.assertEquals(pizzaCompare(
//         [ { size: "extra large", diameter: 14, price: 21.35 },
//           { size: "large", diameter: 12, price: 18.56 },
//           { size: "medium", diameter: 10, price: 15.08, coupon: 4.50 },
//           { size: "small", diameter: 8, price: 12.06 }
//         ]), "The best deal is the medium!");
//     Test.assertEquals(pizzaCompare(
//         [ { size: "large", diameter: 12, price: 12.15, coupon: 1.50 },
//           { size: "medium", diameter: 10, price: 15.08, coupon: 2 },
//           { size: "small", diameter: 8, price: 12.06, coupon: 1 },
//           { size: "personal", diameter: 6, price: 12.06 },
//         ]), "The best deal is the large!");
//     Test.assertEquals(pizzaCompare(
//         [
//           { size: "Americano", diameter: 16, price: 32.89 },
//           { size: "extra large", diameter: 14, price: 26.72 },
//           { size: "large", diameter: 12, price: 18.25, coupon: 2.15 },
//           { size: "medium", diameter: 10, price: 14.00, coupon: 3 },
//           { size: "small", diameter: 8, price: 10.06, coupon: 3 },
//           { size: "personal", diameter: 6, price: 8.06 }
//         ]), "The best deal is the small!");
//      });
//
//   it("should work for non-ordered menus with unexpected names", _ => {
//     Test.assertEquals(pizzaCompare(
//         [ { size: 'small', diameter: 8, price: 10.06, coupon: 3 },
//           { size: 'large', diameter: 10, price: 14, coupon: 2 },
//           { size: 'gut buster', diameter: 17, price: 24.17 },
//           { size: 'princess', diameter: 6, price: 10.06, coupon: 5},
//           { size: 'medium', diameter: 10, price: 14.15, coupon: 5 },
//           { size: 'triple dog dare', diameter: 19, price: 32.17 }
//         ]), "The best deal is the gut buster!");
//
//     Test.assertEquals(pizzaCompare(
//         [ { size: 'media', diameter: 10.5, price: 10.66},
//           { size: 'grande', diameter: 14, price: 17.76, coupon: 2 },
//           { size: 'piccola', diameter: 8.3, price: 7.99, coupon: 2.50 },
//           { size: 'gigante', diameter: 16, price: 21.12 }
//         ]), "The best deal is the piccola!");
//
//     Test.assertEquals(pizzaCompare(
//     [ { size: 'Bob', diameter: 10.3, price: 10.66},
//       { size: 'apple', diameter: 6, price: 12, coupon: 0.01 },
//       { size: 'I HAVE MICE IN MY PANTS', diameter: 12, price: 7.99 },
//       { size: 'Trump is a fool', diameter: 12, price: 21 }
//     ]), "The best deal is the I HAVE MICE IN MY PANTS!");
//   });
//
//
//
//
//   it("should work for random tests", _ => {
//     // original function to check
//     function solution(menu) {
//       for (var i = 0 ; i < menu.length ; i++) {
//         var thisPrice = menu[i].price -
//             (menu[i].coupon?menu[i].coupon:0);
//         var sqrInches = Math.PI*Math.pow(menu[i].diameter/2,2);
//         menu[i].pricePerSqrInch =
//             Math.ceil((thisPrice*100)/sqrInches)/100;
//       }
//
//       menu.sort(function(a, b) {
//         if (a.pricePerSqrInch == b.pricePerSqrInch) {
//           return a.diameter - b.diameter;
//         } else {
//           return a.pricePerSqrInch - b.pricePerSqrInch;
//         }
//       });
//       return "The best deal is the " + menu[0].size + "!";
//     }
//
//     function shuffle(array) {
//       var currentIndex = array.length, temporaryValue, randomIndex;
//
//       // While there remain elements to shuffle...
//       while (0 !== currentIndex) {
//
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//
//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//       }
//
//       return array;
//     }
//
//
//     var menu = [];
//     var priceL, priceM, priceS;
//     var sizeL, sizeM, sizeS;
//     var coupL, coupM, coupS;
//
//     for (var i = 0 ; i < 100 ; i++) {
//
//       // randomly +/- 10%
//       priceL = 19.50 * (1 + ((Math.random()-.5)/5));
//       priceM = 14.50 * (1 + ((Math.random()-.5)/5));
//       priceS = 10.00 * (1 + ((Math.random()-.5)/5));
//
//       // randomly +/- 5%
//       sizeL = 12 * (1 + ((Math.random()-.5)/10));
//       sizeM = 10 * (1 + ((Math.random()-.5)/10));
//       sizeS = 8 * (1 + ((Math.random()-.5)/10));
//
//       // 10% chance of coupon, $1-$3
//       coupL = (Math.random()<.9)?0:Math.ceil(Math.random()*3);
//       coupM = (Math.random()<.9)?0:Math.ceil(Math.random()*3);
//       coupS = (Math.random()<.9)?0:Math.ceil(Math.random()*3);
//
//
//       menu = [
//         {size: "large", diameter: sizeL, price: priceL, coupon: coupL},
//         {size: "medium", diameter: sizeM, price: priceM, coupon: coupM},
//         {size: "small", diameter: sizeS, price: priceS, coupon: coupS},
//       ];
//
//       // shuffle the array
//       menu=shuffle(menu);
//
//       Test.assertEquals(pizzaCompare(menu), solution(menu));
//     }
//   });
//
// });
