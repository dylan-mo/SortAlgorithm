/**
 * Bubble Sort
 * @param {*} arr 
 */
function sort(arr) {

    let i = 0;
    let len = arr.length - 1;

    while (len > 1) {

        i = 0;

        while (i < len) {

            if (arr[i] > arr[i + 1]) {

                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }

            i++;
        }

        len--;
    }


}

module.exports = {
    sort
}