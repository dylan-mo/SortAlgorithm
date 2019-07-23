
/**
 * Selection Sort
 * @param {*} arr 
 */
function sort(arr) {

    let i = 0;

    while (i < arr.length) {

        let j = i;
        while (j < arr.length) {

            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }

            j++;
        }

        i++
    }

}

module.exports = {
    sort
}