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
    for (let i = 0; i < 10; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    //console.log(`desordenado:`)
    //console.dir(vet, { 'maxArrayLength': null });
    //console.log(`ordenado:`)
    //console.dir(bubbleSort(vet), { 'maxArrayLength': null });


})()
console.timeEnd(`tempo`)