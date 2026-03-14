function selectRandomOf(valueInArray) {
    const valueInArrayLength = valueInArray.length;
    const randomNumber = Math.floor(Math.random()*valueInArrayLength) + 0;
    let final;

    valueInArray.forEach((array, index) => {
        if (randomNumber >= index) {
            final = array;
        }
    });

    return final;
}

console.log(selectRandomOf([2, 3, 4, 5]));
