'use strict';
console.log('connected1');
$(async function() {
  console.log('connected');
  const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  let $suggestions = $('.suggestions');
  let res = await fetch(endpoint);
  let cities = await res.json();
  let $search = $('.search');

  $search.on('keyup', e => {
    let val = $(e.target).val();
    let filteredCities = filterCities(val);
    let cityLis = filteredCities.map(city => {
      let cityLi = $('<li>')
        .addClass('suggestions')
        .append(
          $('<span>')
            .addClass('name')
            .text(`${city.city}, ${city.state}`)
        )
        .append(
          $('<span>')
            .addClass('suggestions')
            .text(addCommas(city.population))
        );
      return cityLi;
    });
    $suggestions.empty();
    $suggestions.append(...cityLis);
  });

  function addCommas(num) {
    return (x => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    })(num);
  }

  function filterCities(substring) {
    return cities.filter(city => {
      return (
        city.city.toLowerCase().includes(substring.toLowerCase()) ||
        city.state.toLowerCase().includes(substring.toLowerCase())
      );
    });
  }
});
