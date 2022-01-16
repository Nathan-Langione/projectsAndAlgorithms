function pushFront(array, val) {
    arr = array;
    val = val;
    arrLength = 0;
    tmpArr = [val];
    arrCounter = 0;

    while (arr[arrCounter]) {
        arrLength++;
        arrCounter++;
    }
    console.log("Starting array and value to add")
    console.log(arr, val)

    for (i = 0; i < arrLength; i++) {
        tmpArr[i + 1] = arr[i]
    }

    arr = tmpArr;
    console.log("Returned array = " + arr);
    return arr;
}

function popFront(array) {
    // initializing variables
    let arr = array;
    let arrLength = 0;
    let arrCounter = 0;
    let tmpArr = [];
    let counter1 = 0;
    let counter2 = 0;
    let front;

    // calculating array length
    while (arr[arrCounter]) {
        arrLength++;
        arrCounter++;
    }
    console.log("Starting array: ")
    console.log(arr)

    // populating temp array, getting val at index 0
    for (i = arrLength - 1; i > 0; i--) {
        //console.log("index: " + i + " value: " + arr[i]);
        tmpArr[counter1] = arr.pop();
        counter1++;
    }

    // set front to the value of array index 0
    front = arr;
    // clear initial array
    arr = [];

    // repopulate initial array
    for (i = arrLength - 1; i > 0; i--) {

        arr[counter2] = tmpArr.pop();
        counter2++;
    }
    console.log("Ending array: " + arr)
    return front;
}

/*     create a temp array and add the new value to index 0
    remove entries from end of original array to temp array 2 until I get to index position
    remove entries from temp array 2 and add them to temp array
    add temp array to array
    returm array
*/

function insertAt(array, position, value) {
    let arr = array;
    let pos = position;
    let val = value;
    let arrCounter = 0;
    let arrLength = 0;
    let tmpArr1 = [value];
    let tmpArr2 = [];

    console.log("Parameters:")
    console.log(arr, pos, val)

    // calculating array length
    while (arr[arrCounter]) {
        arrLength++;
        arrCounter++;
    }
    console.log("Starting array: ")
    console.log(arr)


    // populating temp array2 from arr
    let flcounter1 = 0;

    for (i = arrLength - 1; i >= position; i--) {
        // console.log("index: " + i + " value: " + arr[i]);
        tmpArr2[flcounter1] = arr.pop();
        flcounter1++;
    }
    //console.log("Current array value: " + arr);
    //console.log(tmpArr1);
    //console.log(tmpArr2);

    // populating temp array 1 from temp array 2
    let flcounter2 = 1;

    for (i = flcounter1 - 1; i >= 0; i--) {
        // console.log("index: " + i + " value: " + tmpArr2[i]);
        tmpArr1[flcounter2] = tmpArr2.pop();
        flcounter2++;
    }

    // console.log("temp array 1 value: ");
    // console.log(tmpArr1);

    // calculating temp array 1 length
    let arrCounter2 = 0;
    let arrLength2 = 0;
    while (tmpArr1[arrCounter2]) {
        arrLength2++;
        arrCounter2++;
    }


    // appending values in temp array 1 to the array
    for (i = 0; i < arrLength2; i++) {
        arr[pos] = tmpArr1[i];
        // console.log(arr[pos])
        pos++;
    }
    console.log("final array value");
    console.log(arr);
    return arr;
}

pushFront([1, 5, 2], 7)
console.log(popFront([6, 3, 2, 4]));

insertAt([1, 5, 2, 32, 8], 2, 17);