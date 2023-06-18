// < ---- Bismillah ---- >

// Execrcises from CodingJs (Array-1)

// Exercise sameFirstLast

function sameFirstLast(nums) {
  if (nums.length > 0 && nums[0] === nums[nums.length - 1]) {
    return true;
  } else {
    return false;
  };
};

// Exercise commonEnd

function commonEnd(a, b) {
  if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
    return true;
  } else {
    return false;
  };
};

// Exercise sum3

function sum3(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  };
  return res;
};

// Exercise sum 2

function sum2(nums) {
  if (nums.length == 0) return 0;

  if (nums.length == 1) return nums[0];

  return nums[0] + nums[1];
};

// Exercise rotateLeft3

function rotateLeft3(nums) {
  let first = nums[0];
  nums.shift();
  nums.push(first);

  return nums;
};

// Exercise reverse3
// method-1

function reverse3(nums) {
  return nums.reverse();
};

// method-2
function reverse3(nums) {
  let res = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    res.push(nums[i]);
  }

  return res;
};

// Exercise middleArray

function middleWay(a, b) {
  return [a[1], b[1]];
};

// Exercise makeLas

//  int[] arr = new int[2 * nums.length];
//     arr[arr.length - 1] = nums[nums.length - 1];
//     return arr;

function makeLast(nums) {
  if (nums[0] === 6 || nums[nums.length - 1] === 6) {
    return true;
  } else {
    return false;
  };
};

// Exercise double23

function double23(nums) {
  if (nums === []) {
    return false;
  }
  for (var i = 0; i < nums.length; i++) {
    if (
      (nums[i] === 2 && nums[i + 1] === 2) ||
      (nums[i] === 3 && nums[i + 1] === 3)
    ) {
      return true;
    } else return false;
  };
  return false;
};

// Exercise start1

function start1(a, b) {
  if (a[0] === 1 && b[0] === 1) {
    return 2;
  };
  if (a[0] === 1 || b[0] === 1) {
    return 1;
  };
  return 0;
};

// Exercises from CodeWars
// Exercise removeSmalles (7-kyu)

function removeSmallest(numbers) {

  const copy = numbers.slice(0);
  let kichikQiymat = numbers.indexOf(Math.min(...numbers));
  copy.splice(kichikQiymat, 1);

  return copy;
};

// Exercise Testing-1-2-3

var number = function (array) {
    let array = ['a', 'b', 'c', 'd']
    for (let i = 0; i < array.length; i++) {
        arr[i] = `${i+1}: ${array[i]}`
    };
    return array;
};

// Exercises from CodeWars and CodingJs

 function findLowestIndex(nums) {
   let minNum = Math.min(...nums);
   return nums.indexOf(minNum);
}
 console.log(findLowestIndex([99, 98, 97, 96, 95]));
 console.log(findLowestIndex([99, 98, 97, 96, 95]));
 console.log(findLowestIndex([99, 98, 97, 96, 95]));
 console.log(findLowestIndex([99, 98, 97, 96, 95]));

// exercise

 function countEvens(nums) {
   let count = 0;
   nums.map((val) => val % 2 === 0 && count++, 0);

   return count;
 }
 console.log(countEvens([2, 1, 2, 3, 4]));

// exercise 

 let count = 0;
 function sum13(nums) {
   for (let i = 0; i < nums.length; i++) {
     if (nums[i] === 13) {
       return 0;
     } else {
       count += nums[i];
     }
   }
 }

 sum13([1, 2, 2, 1, 13, 213, 4, 5, 6]);

 console.log(count);

// exercise

 function lucky13(nums) {
     if(nums.includes(1) || nums.includes(3)){
         return false
     } else {
         return true
     }
 }

// exercise

 console.log(lucky13([5, 2, 4]));

  function sum28(nums) {
  let res = nums.filter((v) => v === 2);
  return res.length === 4 ? true : false;
}

console.log(sum28([1, 2, 4, 2, 5, 2, 2]));

// exercise

function more14(nums) {
  let birlar = nums.filter((v) => v === 1);
  let tortlar = nums.filter((v) => v === 4);
  return birlar.length > tortlar.length ? true : false;
}

console.log(more14([1, 4, 1, 1, 4, 1]));

// exercise

function prependSum(nums) {
  nums.splice(0, 1, nums[0] + nums[1]);
  nums.splice(1, 1);
  return nums;
}

console.log(prependSum([1, 1, 1, 1, 1]));

// exercise

function fizzArray(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(i);
  }
  return res
}

// exercise

console.log(fizzArray(1));

function only14(nums){
  return nums.every(v => v === 1 || v === 4)
}

// exercise

function no14(nums){
  if(nums.includes(1) && nums.includes(4)){
    return false
  } else {
    return true
  }
}

// exercise flattenAndSort

function flattenAndSort(array) {
  return array.flat(Infinity).sort((a, b) => a - b);
}

console.log(flattenAndSort([[], [1, [[[[[[[[[[[[2, [[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]]]]]]]], []]));

// exercise findTheCapitals

var capitals = function (word) {
  let res = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      res.push(word.indexOf(word[i]));
    }
  }
  return res;
};

console.log(capitals("CodEWaRs"));

// exercise 

var number = function (array) {
    let array = ['a', 'b', 'c', 'd']
    for (let i = 0; i < array.length; i++) {
        arr[i] = ${i+1}: ${array[i]}
    }
    return array;
};

// exercise 1-method

function reverse3(nums){
  let res = []
  for(let i = nums.length - 1; i >= 0; i--){
    res.push(nums[i])
  }
  
  return res
}

// exercise 2-method

function reverse3(nums){
  return nums.reverse()
}

// exercise rotateLeft3

function rotateLeft3(nums){
   let first = nums[0];
  nums.shift();
  nums.push(first);

  return nums;
}

// exercise commonEnd

function commonEnd(a, b){
  if(a[0] === b[0] || a[a.length - 1] === b[b.length - 1]){
    return true
  } else {
    return false
  }
}
