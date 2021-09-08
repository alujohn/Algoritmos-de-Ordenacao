function quickSort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    const pivot = partition(array, left, right);

    if (left < pivot - 1) {
        quickSort(array, left, pivot - 1);
    }

    if (right > pivot) {
        quickSort(array, pivot, right);
    }

    return array;
}

function partition(array, left, right) {
    const pivot = Math.floor((left + right) / 2);

    while (left <= right) {
        while (array[left] < array[pivot]) {
            left++;
        }

        while (array[right] > array[pivot]) {
            right--;
        }

        if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }

    return left;
}


(function execution() {
    console.time(`tempo`)

    let vet = new Array()
    for (let i = 0; i < 10; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    //console.log(`desordenado:`)
    //console.dir(vet, { 'maxArrayLength': null });
    //console.log(`ordenado:`)
    //console.dir(quickSort(vet), { 'maxArrayLength': null });


})()
console.timeEnd(`tempo`)

