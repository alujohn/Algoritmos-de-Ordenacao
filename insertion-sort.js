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
    for (let i = 0; i < 10; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    //console.log(`desordenado:`)
    //console.dir(vet, { 'maxArrayLength': null });
    //console.log(`ordenado:`)
    //console.dir(insertionSort(vet), { 'maxArrayLength': null });


})()
console.timeEnd(`tempo`)