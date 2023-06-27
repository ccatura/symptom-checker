let diabetesDIV = document.querySelector('#diabetes-div');
let worklifeDIV = document.querySelector('#worklife-div');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let worklife = urlParams.get('worklife')
let diabetes = urlParams.get('diabetes')

console.log('worklife: ' + worklife);
console.log('diabetes: ' + diabetes);





    if (worklife == 'true') {
        worklifeDIV.style.display = "flex";
    }

    if (diabetes == 'true') {
        diabetesDIV.style.display = "flex";
    }

