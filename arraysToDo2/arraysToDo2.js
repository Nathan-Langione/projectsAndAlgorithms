function reverse(array) {
    let arr = array;
    let arrLen = arr.length;
    let countup = 0;
    let countdown = arr.length - 1;

    console.log("starting array value:");
    console.log(arr);
    while (countup < countdown) {
        let tmp1 = arr[countup];
        let tmp2 = arr[countdown];
        //console.log(tmp1);
        //console.log(tmp2);
        arr[countup] = tmp2;
        arr[countdown] = tmp1;
        countup++;
        countdown--;
    }
    console.log("final array value:");
    console.log(arr)
}

function rotate(array, number) {
    let arr = array;
    let num = number;
    let count = 0;
    let start = arr[0];
    let end = arr[arr.length - 1];


    console.log("starting array;")
    console.log(arr)
    if (num > 0) {
        console.log("Moving to the right " + num)
        while (count < num) {
            let temp1 = arr[0];
            let temp2 = arr[1];
            // Loop for moving values to the right
            for (let i = 0; i < arr.length - 1; i++) {
                arr[i + 1] = temp1;
                temp1 = temp2;
                temp2 = arr[i + 2];
            }
            arr[0] = end;
            end = arr[arr.length - 1];
            count++;
        }
        console.log(arr);
    } else {
        console.log("Moving to the left" + num)
        num = num * -1;
        while (count < num) {
            let temp1 = arr[arr.length - 1];
            let temp2 = arr[arr.length - 2];
            // Loop for moving values to the left
            for (let i = arr.length - 1; i > 0; i--) {
                arr[i - 1] = temp1;
                temp1 = temp2;
                temp2 = arr[i - 2];
            }
            arr[arr.length - 1] = start;
            start = arr[0];
            count++;
        }
        console.log(arr);
    }
}


function filterRange(arr, minVal, maxVal) {
    console.log("starting array:")
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        again = false;
        console.log("run " + i)
        if (arr[i] < minVal || arr[i] > maxVal) {
            console.log(arr[i])
            for (var j = i + 1; j < arr.length; j++) {
                arr[j - 1] = arr[j];
            }
            arr.length--;
            i--;
            console.log(arr);
        }
    }
    console.log("ending array:")
    console.log(arr)
}

function concat(arr1, arr2) {
    var newArr = [];
    var ind = 0;

    for (let i = 0; i < arr1.length; i++) {
        newArr[ind] = arr1[i];
        ind++;
    }
    for (let i = 0; i < arr2.length; i++) {
        newArr[ind] = arr2[i];
        ind++;
    }
    console.log(newArr)
    return newArr;
}

// reverse([1, 2, 3, 4])
// reverse([1, 2, 3, 4, 5, 6, 7])
//rotate([1, 2, 3, 4], -2);
//rotate([1, 2, 3, 4], 3);
//filterRange([9, 22, 33, 34], 25, 35)
concatArrays([1, 2, 3], [3, 2, 1])