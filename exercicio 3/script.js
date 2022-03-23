function generateKey() {
    console.log("Generate Euromilhões Key");

    const key = {
        numbers: generateXNumbersBetweenMinAnsMax(length: 5, minNumber: 1, maxNumber: 50),
        stars: generateXNumbersBetweenMinAnsMax(length:2, minNumber:1, maxNumber:12)
    }

    key.numbers = sortIntArray(key.numbers);
    key.stars = sortIntArray(key.stars);

    addKeyToHtmlTable(key)
}

funcion generateXNumbersBetweenMinAnsMax(length, minNumber, maxNumber) {
    let numbers = [];

    while(numbers.length < length){
        let randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;
        numbers.push(randomNumber);
    }

    console.log(numbers);
    return numbers;
}

function sortArray(array) {
    return array.sort((a,b) => a-b)
}

function addKeyToHtmlTable(key) {
    const table = document.getElementById(elementid: "tableKey");
    let tbody = table.children[0];

    tbody.innerHTML = tbody.innerHTML
        + '<tr>'
            + '<td>' + key.numbers.join(' - ') +
            + '**' + key.stars.join(' - ') + '</td>'
            + '<td>' + sortIntoArray(key.numbers).join('-') + '</td>'
            + '<td>' + sortIntArray(key.stars).join (' - ') + '</td>'
        + '</tr>'

    console.log(tbody);
}