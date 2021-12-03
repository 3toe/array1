// 1
// create a function to randomize an array of numbers
function shuffle(arr){
   let x = arr.length;
   for(var i = 0; i<x; i++){
      var y = Math.floor(Math.random() * (x));
      [arr[i], arr[y]] = [arr[y], arr[i]];
   }
   return(arr)
}

var testArr = [1,2,3,4,5,6,7];
// console.log(shuffle(testArr));

// 2
// skyline heights algorithm
function skyline(arr){
   var x = 1;
   for(var i=0; i<arr.length; i++){
      if(arr[i] < x){
         arr.splice(i, 1);
         i -= 1;
      }
      else{
         x = arr[i];
      }
   }
   return(arr);
}

var test = [0, 3, 1, 5, 2, 2, 7];
// console.log(skyline(test));

// 3
// Zipping algo
function zipper(arr1, arr2){
   var arr = arr1.concat(arr2);
   for(var i=0; i<arr.length; i++){
      for(var j=i; j<arr.length; j++){
         if(arr[j] < arr[i]){
            [arr[i], arr[j]] = [arr[j], arr[i]];
         }
      }
   }
   return(arr);
}

var A = [1, 5, 7, 2];
var B = [44, 2, 0, 7];
// console.log(zipper(A, B));

// 4
// Luhn algo
function Luhn(arr){
   var numsum = 0;
   var result = false;
   let x = arr[arr.length - 1];
   arr.pop();
   for(var i=arr.length - 1; i<=0; i-2){
      arr[i] = arr[i] * 2;
      if(arr[i] > 9){
         arr[i] -= 9;
      }
   }
   for(var j = 0; j<arr.length; j++){
      numsum += j;
   }
   numsum += x;
   if(numsum%10 == 0){
      result = true;
   }   
   return(result);
}

var cc = [1,3,2,5,2,6,5,4,3,7,9,6,4];
// console.log(Luhn(cc));