const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const peopleURL = API_URL + PEOPLE_URL.replace(":id", id);

  $.get(peopleURL, opts, callback);
}

obtenerPersonaje(1, function (peopleData) {
  console.log(`Hola, soy ${peopleData.name}`);
  obtenerPersonaje(2, function (peopleData) {
    console.log(`Hola, soy ${peopleData.name}`);
    obtenerPersonaje(3, function (peopleData) {
      console.log(`Hola, soy ${peopleData.name}`);
      obtenerPersonaje(4, function (peopleData) {
        console.log(`Hola, soy ${peopleData.name}`);
      });
    });
  });
});
