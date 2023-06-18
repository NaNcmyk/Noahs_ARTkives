// make sure .json file is in the root directory
// otherwise, will return 404 error
const url = './artists.json';

// keep a reference to data outside of async function
// to be able to access it from another script
let data = '';

function getFileName(data) {
    // fallback
    if (!data) return 'a_pigcasso_original.png';

    let randIndex = Math.floor(Math.random() * data.length);
    let randName = data[randIndex]['animal name'];
    const vowelsArr = 'aeiou'.split('');

    // force string to lowercase
    // replace any dashes with a space
    // replace any non-alphanumeric and non-space strings with an empty string
    // join all words in formatted string with an underscore
    let formattedName = randName
        .toLowerCase()
        .replace('-', ' ')
        .replace(/[^\w\d\s]/g, '')
        .split(" ")
        .join("_");

    // check if first letter of name is vowel
    // determines grammatically correct indefinite article
    const fileName =
        vowelsArr.includes(formattedName[0]) ?
            `an_${formattedName}_original.png` :
            `a_${formattedName}_original.png`

    return fileName;
}

async function getData() {
    const response = await fetch(url);
    data = await response.json();
}

export { data, getData, getFileName };