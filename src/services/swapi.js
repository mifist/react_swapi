import axios from 'axios';

export const _apiBase = 'https://swapi.dev/api';
export const _imageBase = 'https://starwars-visualguide.com/assets/img';

const checkStatus = (response, url) => {
  if (response && response.status !== 200) {
    throw new Error(`Could not fetch ${url}, received ${response.status}`);
  }
};

const swapi = {
  getResource: (url) =>
    axios.get(`${_apiBase}${url}`).then(({data}) => data.results),
  films: {
    fetchAll: () =>
      axios.get(`${_apiBase}/films/`).then((res) => {
        checkStatus(res, `/films/`);
        return res.data.results.map(_transformFilm);
      }),
    fetchById: (id) =>
      axios.get(`${_apiBase}/films/${id}`).then((res) => {
        checkStatus(res, `/films/${id}`);
        return _transformFilm(res.data);
      }),
  },
  starships: {
    fetchAll: () =>
      axios.get(`${_apiBase}/starships/`).then((res) => {
        checkStatus(res, `/starships/`);
        return res.data.results.map(_transformStarship);
      }),
    fetchById: (id) =>
      axios.get(`${_apiBase}/starships/${id}`).then((res) => {
        console.log({res});
        checkStatus(res, `/starships/${id}`);
        return _transformStarship(res.data);
      }),
  },
  people: {
    fetchAll: () =>
      axios.get(`${_apiBase}/people/`).then((res) => {
        checkStatus(res, `/people/`);
        return res.data.results.map(_transformPerson);
      }),
    fetchById: (id) =>
      axios.get(`${_apiBase}/people/${id}`).then((res) => {
        console.log({res});
        checkStatus(res, `/people/${id}`);
        return _transformPerson(res.data);
      }),
  },
  vehicles: {
    fetchAll: () =>
      axios.get(`${_apiBase}/vehicles/`).then((res) => {
        checkStatus(res, `/vehicles/`);
        return res.data.results.map(_transformVehicles);
      }),
    fetchById: (id) =>
      axios.get(`${_apiBase}/vehicles/${id}`).then((res) => {
        console.log({res});
        checkStatus(res, `/vehicles/${id}`);
        return _transformVehicles(res.data);
      }),
  },
  species: {
    fetchAll: () =>
      axios.get(`${_apiBase}/species/`).then((res) => {
        checkStatus(res, `/species/`);
        return res.data.results.map(_transformSpecies);
      }),
    fetchById: (id) =>
      axios.get(`${_apiBase}/species/${id}`).then((res) => {
        console.log({res});
        checkStatus(res, `/species/${id}`);
        return _transformSpecies(res.data);
      }),
  },
  planets: {
    fetchAll: () =>
      axios.get(`${_apiBase}/planets/`).then((res) => {
        checkStatus(res, `/planets/`);
        return res.data.results.map(_transformPlanet);
      }),
    fetchById: (id) =>
      axios.get(`${_apiBase}/planets/${id}`).then((res) => {
        console.log({res});
        checkStatus(res, `/planets/${id}`);
        return _transformPlanet(res.data);
      }),
  },
};

export const _extractId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
};

// Search Fields: title
export const _transformFilm = (film) => {
  return {
    id: _extractId(film),
    director: film.director,
    episodeId: film.episode_id,
    openingCrawl: film.opening_crawl, // The opening paragraphs at the beginning of this film.
    producer: film.producer, // The name(s) of the producer(s) of this film. Comma separated.
    releaseDate: film.release_date,
    title: film.title,
    url: film.url,
    characters: film.characters,
    planets: film.planets,
    species: film.species,
    starships: film.starships,
    vehicles: film.vehicles,
    thumbnail: `${_imageBase}/films/${_extractId(film)}.jpg`,
  };
};

// Search Fields: name
export const _transformPlanet = (planet) => {
  return {
    id: _extractId(planet),
    title: planet.name,
    diameter: planet.diameter, // The diameter of this planet in kilometers.
    rotationPeriod: planet.rotation_period, // The number of standard hours it takes for this planet to complete a single rotation on its axis.
    orbitalPeriod: planet.orbital_period, // The number of standard days it takes for this planet to complete a single orbit of its local star.
    gravity: planet.gravity, // A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
    population: planet.population,
    climate: planet.climate, // The climate of this planet. Comma separated if diverse.
    terrain: planet.terrain, // The terrain of this planet. Comma separated if diverse.
    surfaceWater: planet.surface_water, // The percentage of the planet surface that is naturally occurring water or bodies of water.
    residents: planet.residents,
    films: planet.films,
    url: planet.url,
    thumbnail: `${_imageBase}/planets/${_extractId(planet)}.jpg`,
  };
};

// Search Fields: name, model
export const _transformStarship = (starship) => {
  return {
    id: _extractId(starship),
    title: starship.name,
    model: starship.model,
    class: starship.starship_class,
    manufacturer: starship.manufacturer, // Comma separated if more than one.
    length: starship.length, // The length of this starship in meters.
    costInCredits: starship.cost_in_credits, // The cost of this starship new, in galactic credits.
    crew: starship.crew, // The number of personnel needed to run or pilot this starship.
    passengers: starship.passengers, // The number of non-essential people this starship can transport.
    speed: starship.max_atmosphering_speed, // The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
    cargoCapacity: starship.cargo_capacity, // The maximum number of kilograms that this starship can transport.
    consumables: starship.consumables, // The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
    hyperdriveRating: starship.hyperdrive_rating, // The class of this starships hyperdrive.
    mglt: starship.MGLT, // The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
    url: starship.url,
    pilots: starship.pilots, // An array of People URL Resources that this starship has been piloted by.
    films: starship.films,
    thumbnail: `${_imageBase}/dtarships/${_extractId(starship)}.jpg`,
  };
};

// Search Fields: name
export const _transformPerson = (person) => {
  return {
    id: _extractId(person),
    title: person.name,
    gender: person.gender,
    birthYear: person.birth_year, // The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
    eyeColor: person.eye_color,
    hairColor: person.hair_olor,
    skinColor: person.skin_color,
    height: person.height, // The height of the person in centimeters.
    homeworld: person.homeworld, // The URL of a planet resource, a planet that this person was born on or inhabits.
    mass: person.mass, // The mass of the person in kilograms.
    url: person.url,
    films: person.films,
    species: person.species,
    starships: person.starships,
    vehicles: person.vehicles,
    thumbnail: `${_imageBase}/characters/${_extractId(person)}.jpg`,
  };
};

// Search Fields: name
export const _transformSpecies = (species) => {
  return {
    id: _extractId(species),
    title: species.name,
    class: species.classification,
    designation: species.designation,
    language: species.language,
    eyeColor: species.eye_colors,
    hairColor: species.hair_colors,
    skinColor: species.skin_colors,
    height: species.average_height, // The average height of this species in centimeters.
    lifespan: species.average_lifespan, // The average lifespan of this species in years.
    homeworld: species.homeworld,
    mass: species.mass,
    url: species.url,
    films: species.films,
    people: species.people,
    thumbnail: `${_imageBase}/species/${_extractId(species)}.jpg`,
  };
};

// Search Fields: name, model
export const _transformVehicles = (vehicle) => {
  return {
    id: _extractId(vehicle),
    title: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    manufacturer: vehicle.manufacturer, // Comma separated if more than one.
    length: vehicle.length, // The length of this vehicle in meters.
    costInCredits: vehicle.cost_in_credits, // The cost of this vehicle new, in Galactic Credits.
    crew: vehicle.crew, 
    passengers: vehicle.passengers,
    speed: vehicle.max_atmosphering_speed, // The maximum speed of this vehicle in the atmosphere.
    cargoCapacity: vehicle.cargo_capacity, // The maximum number of kilograms that this vehicle can transport.
    consumables: vehicle.consumables, // The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
    url: vehicle.url,
    pilots: vehicle.pilots, // An array of People URL Resources that this starship has been piloted by.
    films: vehicle.films,
    thumbnail: `${_imageBase}/vehicles/${_extractId(vehicle)}.jpg`,
  };
};

export default swapi;
