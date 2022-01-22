var arr = [42, 68, 7, 21, 243, 512];
for (var x = arr.length - 2; x > 1; x--) {
    arr[x - 1] = arr[x + 1];
}
console.log(arr);
console.log(x);// Does x exist out here?
