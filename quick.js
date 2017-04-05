function quick(arr) {
  var rightArr = [];
  var leftArr = [];
  var pivot = arr[0];
    // check if the paramiter is an array
    if(Array.isArray(arr) === false){
      return false;
    }

    // break point so no infi loops :)
    if(arr.length < 2 ){
      return arr;
    }

    // our quick_sort recursive
    for(var i = 1; i < arr.length; i++) {

      if(typeof arr[i] !== 'number') {
        return false;
      }

      if(arr[i] < pivot) {
        leftArr.push(arr[i]);

      } else {
       rightArr.push(arr[i]);

      }
    }
    arr = quick(leftArr).concat(pivot, quick(rightArr));
    return arr;
}

module.exports = quick;
