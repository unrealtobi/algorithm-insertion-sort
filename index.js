const insertionSort = (arr) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};

const arr = [12, 11, 13, 5, 6]; //use case
const sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
