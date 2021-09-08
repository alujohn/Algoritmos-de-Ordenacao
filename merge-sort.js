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
    for (let i = 0; i < 10; i++) {
        vet[i] = Math.floor(Math.random() * vet.length)
    }
    ///console.log(`desordenado:`)
    //console.dir(vet, { 'maxArrayLength': null });
    //console.log(`ordenado:`)
    //console.dir(mergeSortTopDown(vet), { 'maxArrayLength': null });


})()
console.timeEnd(`tempo`)