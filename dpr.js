//closures

//1
   function Counter(){
    var counter = 0;

    function IncreaseCounter() {
      return  counter += 1;
    };

     return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// 2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); 
    // prints 1
  }
  console.log(count); // prints 0
})();

// 3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // prints 3
    }, 1000);
  }

  // 4
// calculate area of a rectangle 
function findArea(width, length){

    function area(){
        let a = width*length;
        
        return a;
    }
   return area();
}

console.log(findArea(50,20)); // prints 1000

// 7
//Take a variable in outer function and create an inner function to increase the counter every time it is called

function count2(){

    let c = 0;

   function inc(){
   
     return c+=1;
      
    };
  
    return inc;  
};
let Count =count2();

//calling the function by button Click ->

function Click(){
   
 document.getElementById("btn").innerText =Count(); 
   
} 

// 8

var a = 12;
(function () {
  alert(a);
})(); // prints 12

// 9

var A = 10;
var x = (function () {
  var A = 12;
  return function () {
    alert(A);
  };
})();

 x(); //prints 12


// 10 
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123); // prints 
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz


