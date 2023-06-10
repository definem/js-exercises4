// < ---- Bismillah ---- >

// Execrcises from CodingJs (Array-1)

// exercise sameFirstLast

function sameFirstLast(nums) {
  if (nums.length > 0 && nums[0] === nums[nums.length - 1]) {
    return true;
  } else {
    return false;
  }
}

// exercise commonEnd

function commonEnd(a, b) {
  if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
    return true;
  } else {
    return false;
  }
}

// exercise sum3

function sum3(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  return res;
}

// exercise sum 2

function sum2(nums) {
  if (nums.length == 0) return 0;

  if (nums.length == 1) return nums[0];

  return nums[0] + nums[1];
}

// exercise rotateLeft3

function rotateLeft3(nums) {
  let first = nums[0];
  nums.shift();
  nums.push(first);

  return nums;
}

// exercise reverse3
// method-1

function reverse3(nums) {
  return nums.reverse();
}

// method-2
function reverse3(nums) {
  let res = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    res.push(nums[i]);
  }

  return res;
}

// exercise middleArray

function middleWay(a, b) {
  return [a[1], b[1]];
}

// exercise makeLas

//  int[] arr = new int[2 * nums.length];
//     arr[arr.length - 1] = nums[nums.length - 1];
//     return arr;

function makeLast(nums) {
  if (nums[0] === 6 || nums[nums.length - 1] === 6) {
    return true;
  } else {
    return false;
  }
}

// exercise double23

function double23(nums) {
    if (nums === []){
        return false;
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 2 && nums[i + 1] === 2 || nums[i] === 3 && nums[i + 1] === 3) {
            return true;
        } else return false;
    }
    return false;
}

