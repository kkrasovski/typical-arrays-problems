exports.min = function min(array) {
    if (array == undefined || array.length < 1) {
        return 0;
    }  else {
        array.sort((a, b) => a - b);
        return array[0];
    }
};

exports.max = function max(array) {
  if (array == undefined || array.length < 1) {
    return 0;
} else {
        array.sort((a, b) => a - b);
        return array[array.length - 1];
    }
};

exports.avg = function avg(array) {
  if (array == undefined || array.length < 1) {
    return 0;
}  else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let average = sum / array.length;
        return average;
    }
};


