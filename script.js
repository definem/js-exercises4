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

// Exercise My Language Skills

var number = function (array) {
    let array = ['a', 'b', 'c', 'd']
    for (let i = 0; i < array.length; i++) {
        arr[i] = `${i+1}: ${array[i]}`
    };
    return array;
};