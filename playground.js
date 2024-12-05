//  let result = 1;
//  let counter = 0;
//   while (counter < 10){
//     result = result* 2;
//     counter = counter + 1;
//   }

//   console.log (result);


//   do{
//     var yourName = prompt ("who are you ?");
//   } while (!yourName);
//   console.log(yourName);

//  let current = 0;

//   for (let i = 20; ;i++){
//    current=i;
//     if(current % 7 == 0)
      
//        break;
//   }
//   console.log(current);


// let dot = '';
// let counter = 0;
// while (counter < 7){
//     counter++;
//     console.log (dot = dot + "#");
// }

// let number = 0;

// for(let count = 0 ; count <= 100; count++){
   
//      number++;

//      if ( number % 3 == 0 && number % 5 == 0 ){

//         console.log("Fizzbuzz")
//     }else if (number%3==0 ){
//              console.log("fizz")
    
//           } else if(number%5==0){
//         console.log("buzz")
//           }else{
//          console.log(number)
//      }
  
// }


// let size = 4;
// let space = " "
// let hash = "#";

// for(let i = 0; i < size; i++){
   
   
//         console.log(space + hash + space + hash + space + hash+ space + hash);
//         console.log(hash + space + hash + space + hash+ space + hash + space);
    
// }

//  let size = 8;
//  let chessBoard = '';
//  let space = ' ';
//  let hash = '#';
//  let arrangement = 1;
//  let area = size * size;

//  for (let i = 0 ; i < area; i++){
//     if(i % 2 == 0){
//         chessBoard += space;
// }else {
//        chessBoard += hash       
//      }
        
//      }    
//      console.log(chessBoard);
          
        

//  var makeNoise = function (){
//      console.log("who let the dogs out!!")
//  }
//  makeNoise();


//  const power = function(base , exponent){
//      let result = 1;
//      for (let count = 0; count < exponent ; count++)
//          result *= base;
//      return result;
//  };

//  console.log(power(2,10));

// var landscape=function(){
// var result="";
// var flat=function(size){
// for(var count=0;count<size;count++)
// result+= " _ ";
// }
// var mountain=function(size){
// result+="/";
// for(var count=0;count<size;count++)
// result+="'";
// result+="\\";
// };
// flat(3);
// mountain(4);
// flat(6);
// mountain(1);
// flat(1);
// return result;
// };
// console.log(landscape());

//Recursive functions examples
// function power (base , exponent){
//   if (exponent == 0)
//     return 1;
//   else {
//     return base * power(base, exponent - 1)
//   }
// }

// console.log(power(2,3));

// function findSolution(target){
//   function find(current, history){
//     if(current == target)
//       return history;
//     else if (current > target)
//       return null;
//     else
//     return find( current + 5 , "(" + history + " + 5 )")||
//            find( current * 3 , "(" + history + " * 3 )");
//     }
//     return find(1 ,"1");
// }

// console.log(findSolution(24))


function logEach(array){
  for(var i = 0; i < array.length; i++)
    console.log(array[i])
}

logEach([1,2,3,4,5,6])


function forEach(array, action){
   for(var i = 0 ; i < array.length; i++)
    action(array[i]);
}

forEach(["hamster", "shrimp", "Foma", "Granfalloon"], console.log);

var numbers = [ 1, 2,3,4,5,6,7], sum = 0;
forEach(numbers, function(number){
  sum+= number;
});

console.log(sum);

function gatherCorrelations(journal){
  var phis = {};
  for ( var entry = 0 ; entry < journal.length; entry++){
    var events = journal[entry].events;
    for(var i = 0 ; i < events.length; i++){
      var event = events[i];
      if(!(event in phis))
        phis[event] = phi(tableFor(event ,journal));
    }
  }
  return phis;
}

function gatherCorrelations(journal){
  var phis = {};
  journal.forEach(function(entry){
    entry.events.forEach(function(event){
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal)); 
         })
  })
}

function reduce(array, combine, start){
  var current = start;
  for (var i =0; i <array.length; i++)
    current = combine(current , array[i]);;
  return current;
}

console.log(reduce([1,2,3,4], function(a,b){
  return a + b;

}, 0));