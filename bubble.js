function bubble(arr) {
  var newAssorted;
  var swap;

  for(var i = 0; i < arr.length; i++) {
    swap = false;

    for(var j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
        newAssorted = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = newAssorted;
        swap = true;
      }
    }

    if(newAssorted === false) {
      break;
    }
  }
  return arr;

}

module.exports = bubble;