export function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let minValIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minValIndex]){
                minValIndex = j;
            }
        }
        const temp = arr[i];
        arr[i] = arr[minValIndex];
        arr[minValIndex] = temp;
        i++;
    }
    return arr;
}

console.log(selectionSort([1,2,3,5,4,3,1,7]));