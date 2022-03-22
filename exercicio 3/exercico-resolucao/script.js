const buttonGenerateKey =
    document.getElementById('generateKey');

const tbody =
    document.getElementsByTagName('tbody');

buttonGenerateKey.addEventListener(
    'click',
    ()=>generateKey()
)

function generateKey() {
    const key = {
        numbers: generateArrayNumbers(1,50,5),
        stars: generateArrayNumbers(1,12,2)
    }

    addKeyToTable(key);
}

function addKeyToTable(key){
    tbody[0].innerHTML +=
        '<tr>' +
            '<td>'+ key.numbers.join(', ')
                  + ' **' + key.stars.join(', ') +
            '</td>' +
            '<td>'+ sortArray(key.numbers).join(', ') +'</td>' +
            '<td>'+ sortArray(key.stars).join(', ') +'</td>' +
        '</td>'
}

function sortArray(array){
    return array.sort((a, b) => a - b);
}

function generateArrayNumbers (
    min, max, length
){
    let generatedNumbers = [];

    // generate random numbers:
    while(generatedNumbers.length < length)
    {
        let number =
            Math.random() * (max - min) + min

        let numberInt = Math.floor(number);

        if(!generatedNumbers.includes(numberInt)) {
            generatedNumbers.push(numberInt);
        }
    }

    console.log(generatedNumbers);

    return generatedNumbers;
}

function cleanTbody(){
   tbody[0].innerHTML = '';
}