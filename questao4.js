//------------MENOR PARA O MAIOR------------//
//------------BUBLESORT------------//
console.log(`BUBBLESORT:`)
function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (
                array[i + 1] &&
                array[i] > array[i + 1]
            ) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }             
        }
    } while (swapped);
    return array;
}

(function execution() {
    console.time(`tempo`)

    let vet = new Array()
    for (let i = 0; i < 15000; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    //console.dir(vet, {'maxArrayLength': null });
    //console.dir(bubbleSort(vet), { 'maxArrayLength': null });
})()
console.timeEnd(`tempo`)
console.log("")

//------------SELECTIONSORT------------//
console.log(`SELECTIONSORT:`)
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            [array[i], array[min]] = [array[min], array[i]]
        }
    }
    return array;
}

(function execution() {
    console.time(`tempo`)
    let vet = new Array()
    for (let i = 0; i < 15000; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    //console.dir(vet, { 'maxArrayLength': null });
    //console.dir(selectionSort(vet), { 'maxArrayLength': null });
})()
console.timeEnd(`tempo`)
console.log("")

//------------INSERTIONSORT------------//
console.log(`INSERTIONSORT:`)
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (array[j] > temp) {
            array[j + 1] = array[j];

            j--;
        }
        j++;
        array[j] = temp;
    }
    return array
}

(function execution() {
    console.time(`tempo`)
    let vet = new Array()
    for (let i = 0; i < 15000; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    //console.dir(vet, { 'maxArrayLength': null });
    //console.dir(insertionSort(vet), { 'maxArrayLength': null });
})()
console.timeEnd(`tempo`)
console.log("")

//------------QUICKSORT------------//
console.log(`QUICKSORT:`)
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
    for (let i = 0; i < 15000; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    //console.dir(vet, { 'maxArrayLength': null });
    //console.dir(quickSort(vet), { 'maxArrayLength': null });
})()
console.timeEnd(`tempo`)
console.log("")

//------------MERGESORT------------//
console.log(`MERGESORT:`)
function mergeSortTopDown(array) {
    if (array.length <= 1) {
        return array
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
}

function mergeTopDown(left, right) {
    const array = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    return array.concat(left.slice()).concat(right.slice());
}
(function execution() {
    console.time(`tempo`)
    let vet = new Array()
    for (let i = 0; i < 15000; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    //console.dir(vet, { 'maxArrayLength': null });
    //console.dir(mergeSortTopDown(vet), { 'maxArrayLength': null });
})()
console.timeEnd(`tempo`)
