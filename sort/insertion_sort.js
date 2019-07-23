/**
 * Insertion Sort
 */
function sort(arr) {

    if (arr[0] > arr[1]) {

        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }

    let end = 1;

    while (end < arr.length) {

        let i = end;

        while (i >= 0) {

            if (arr[i + 1] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                i--;
            } else {
                break;
            }

        }

        end++;
    }
}

module.exports = {
    sort
}
