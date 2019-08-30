$.getJSON('https://swapi.co/api/planets/', function (data) {
  let planet = data.results;
  $.each(planet, function (i, data) {
    $('table tbody').append(`
      <tr>
        <td>${data.name}</td>
        <td>${data.rotation_period}</td>
        <td>${data.orbital_period}</td>
        <td>${data.diameter}</td>
        <td>${data.gravity}</td>
        <td>${data.terrain}</td>
        <td>${data.population}</td>
      </tr>
    `);
  });
});

function getSearchPlanets() {

  $('#search-text').text(function() {
    search($(this).val());
  });

  function search(value) {
    $('table tbody tr').each(function() {
      var found = 'false';
      $(this).each(function() {
        if ($(this).text().toLowerCase().indexOf(value.toLowerCase())>=0) {
          found = 'true';
        }
      });
      if (found == 'true') {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
}
