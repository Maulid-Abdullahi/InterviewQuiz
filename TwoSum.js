//check if all pairs in the array  sum up to S
function sum(arr, S) {
    var sums = [];
    
    // check each element in array
    for (var i = 0; i < arr.length; i++) {
    // check each other element in the array
    for (var j = i + 1; j < arr.length; j++) {
    // determine if these two elements sum to S
    if (arr[i] + arr[j] === S) {
    sums.push([arr[i], arr[j]]);
    }
    }
    }
    // return all pairs of integers that sum to S
    return sums;
    }

    sum([4, 6, 1, -7, 3, 10], 5);
    console.log(sum([3, 5, -4, 8, 11, 1, -1, 6], 10));