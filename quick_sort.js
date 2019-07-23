/**
 * Qick Sort
 * @param {*} arr 
 * @param {*} l 
 * @param {*} r 
 */
function sort(arr, l, r) {

    if (l < r) {

        let start = l;
        let end = r;
        let pivot = arr[l];
        let isForward = false;

        while (start < end) {

            if (!isForward) {

                if (arr[end] < pivot) {

                    arr[start] = arr[end];
                    isForward = !isForward;
                } else {
                    end --;
                }
            } else {

                if (arr[start] > pivot) {
                    arr[end] = arr[start];
                    isForward = !isForward;
                } else {
                    start ++;
                }
            }

        }

        arr[start] = pivot;

        if (l > 1) {
            sort(arr, 0, start - 1);
        }

        if (r - start > 1) {
            sort(arr, start + 1, r);
        }

    }
}

module.exports = {
    sort
};
