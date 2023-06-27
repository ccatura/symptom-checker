let mosaicContainer = document.querySelector('.mosaic-container');
let mosaicContainerMobile = document.querySelector('.left-column-mobile');
let symptomsArray = [];
let submitSymptoms = document.querySelector('#submit-symptoms');
let infoPageOne = document.querySelector('.info-page-one');
let infoPageTwo = document.querySelector('.info-page-two');

let workLifeAnswer = document.querySelector('#work-life');
let diabetesAnswer = document.querySelector('#diabetes');

// For desktop version //
mosaicContainer.addEventListener('click', function(event) {
    let tile = event.target;
    
    if (tile.className.includes("symptom-text")) {
        tile = tile.previousElementSibling;
    }

    if(tile.hasAttribute('data-symptom')) {
        let symptom = (document.getElementById(tile.id)).dataset.symptom;
        let nextSibling = tile.nextElementSibling;

        if (!symptomsArray.includes(symptom)) {
            tile.style.opacity = ".2";
            nextSibling.style.color = "black";
        } else {
            tile.style.opacity = "1";
            nextSibling.style.color = "white";            
        }

        //Removes symptom if symptom is clicked a second time
        if (symptomsArray.includes(symptom)) {
            symptomsArray = symptomsArray.filter(function(f) { return f !== symptom });
        } else {
            symptomsArray.push(symptom);
            symptomsArray.sort();
        }
    }

    if (symptomsArray.length > 0)  {
        submitSymptoms.disabled = false;
    } else {
        submitSymptoms.disabled = true;
    }
});


// For mobile version //
mosaicContainerMobile.addEventListener('click', function(event) {
    let tile = event.target;
    
    console.log(tile.innerText);

    if(tile.hasAttribute('data-symptom')) {
        let symptom = (document.getElementById(tile.id)).dataset.symptom;

        if (!symptomsArray.includes(symptom)) {
            // tile.style.color = "white";
            tile.innerText = "✔ " + tile.innerText;
        } else {
            if(tile.innerText.substring(1, 2) == " ") {
                tile.innerText = tile.innerText.substring(2, tile.innerText.length);
            }
        }

        //Removes symptom if symptom is clicked a second time
        if (symptomsArray.includes(symptom)) {
            symptomsArray = symptomsArray.filter(function(f) { return f !== symptom });
        } else {
            symptomsArray.push(symptom);
            symptomsArray.sort();
        }
    }

    if (symptomsArray.length > 0)  {
        submitSymptoms.disabled = false;
    } else {
        submitSymptoms.disabled = true;
    }
});




submitSymptoms.addEventListener('click', function(evnent) {
    symptomsArray.forEach(function(item) {
        console.log('Symptom: ' + item);
    infoPageOne.style.display = "none";
    infoPageTwo.style.display = "block";
    });

    diabetesAnswer.onclick = function() {
        console.log('Diabete Management: ' + diabetesAnswer.checked)
    }
    workLifeAnswer.onclick = function() {
        console.log('Diabete Management: ' + workLifeAnswer.checked)
    }
});




function newURL() {
    let workLife = workLifeAnswer.checked;
    let diabetes = diabetesAnswer.checked;

    let resultsURL = './index2.html?worklife=' + workLife + '&diabetes=' + diabetes;
    window.location.assign(resultsURL);
}
