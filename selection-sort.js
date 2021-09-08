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
    for (let i = 0; i < 10; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    //console.log(`desordenado:`)
    //console.dir(vet, { 'maxArrayLength': null });
    //console.log(`ordenado:`)
    //console.dir(selectionSort(vet), { 'maxArrayLength': null });


})()
console.timeEnd(`tempo`)