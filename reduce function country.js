const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.responseType='json';

xhr.send();

    xhr.onload=function (){
    let countryData=xhr.response;
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    })
    console.log(population);}