const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.responseType='json';
xhr.send();

xhr.onload = function () {
    const countries = xhr.response;

    const countriesWithLowPopulation = countries.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', countriesWithLowPopulation.map(country => country.name.common));
};


