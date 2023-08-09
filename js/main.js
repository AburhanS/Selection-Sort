function selectionSort(arr){
    let startIndex, temp, 
    len = arr.length;
    for(let i = 0; i < len; i++){
        startIndex = i;
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[startIndex]){
            startIndex = j;
            }
        }
    temp = arr[i];
    arr[i] = arr[startIndex];
    arr[startIndex] = temp;
    }
    return arr;
}

const x = [29, 72, 98, 13, 87, 66, 52, 51, 36]
console.log(selectionSort(x))