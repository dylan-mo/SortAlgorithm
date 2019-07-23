const quickSort = require('./sort/quick_sort');
const bubbleSort = require('./sort/bubble_sort');
const selectionSort = require('./sort/selection_sort');
const insertionSort = require('./sort/insertion_sort');


function init() {

    const arr = [5, 4, 5, 2, 6, 1, 7, 9, 3, 17, 8, 5, 4, 10, 11];

    // Quick Sort
    const arr_quick = JSON.parse(JSON.stringify(arr));
    quickSort.sort(arr_quick, 0, arr_quick.length - 1);
    console.log();
    console.log('****************************');
    console.log('Qick sort result: ');
    console.log(arr_quick);
    console.log();


    // Bubble Sort
    const arr_bubble = JSON.parse(JSON.stringify(arr));
    bubbleSort.sort(arr_bubble);
    console.log('****************************');
    console.log('Bubble sort result: ');
    console.log(arr_bubble);
    console.log();

    // Selection Sort
    const arr_selection = JSON.parse(JSON.stringify(arr));
    selectionSort.sort(arr_selection);
    console.log('****************************');
    console.log('Selection sort result: ');
    console.log(arr_selection);
    console.log();

    // Insertion Sort
    const arr_insertion = JSON.parse(JSON.stringify(arr));
    insertionSort.sort(arr_insertion);
    console.log('****************************');
    console.log('Insertion sort result: ');
    console.log(arr_insertion);
    console.log();



}

module.exports = init()