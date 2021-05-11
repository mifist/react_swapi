import axios from 'axios';

export const _apiBase = 'https://swapi.dev/api';
export const _imageBase = 'https://starwars-visualguide.com/assets/img';

const swapi = {
  getResource: (url) =>
    axios.get(`${_apiBase}${url}`).then((res) => {
      if (res.status !== 200) {
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
      }
      return res.data.results;
    }),
  films: {
    fetchAll: () =>
      axios.get(`${_apiBase}/films/`).then((res) => {
        if (res.status !== 200) {
          throw new Error(
            `Could not fetch 'films'` + `, received ${res.status}`,
          );
        }
        return res.data.results.map(_transformFilm);
      }),
    fetchById: (id) =>
      axios.get(`${_apiBase}/films/${id}`).then((film) => {
        if (film.status !== 200) {
          throw new Error(
            `Could not fetch 'film'` + `, received ${film.status}`,
          );
        }
        return _transformFilm(film.data);
      }),
  },
  starships: {
    fetchAll: () =>
      axios.get(`${_apiBase}/starships/`).then((res) => {
        if (res.status !== 200) {
          throw new Error(
            `Could not fetch 'starships'` + `, received ${res.status}`,
          );
        }
        return res.data.results.map(_transformStarship);
      }),
    fetchById: (id) =>
      axios.get(`${_apiBase}/starships/${id}`).then((starship) => {
        console.log({starship});
        if (starship.status !== 200) {
          throw new Error(
            `Could not fetch 'starship'` + `, received ${starship.status}`,
          );
        }
        return _transformStarship(starship.data);
      }),
  },
};

export const _extractId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
};

export const _transformFilm = (film) => {
  return {
    id: _extractId(film),
    director: film.director,
    episodeId: film.episode_id,
    openingCrawl: film.opening_crawl,
    producer: film.producer,
    releaseDate: film.release_date,
    title: film.title,
    url: film.url,
    characters: film.characters,
    planets: film.planets,
    species: film.species,
    starships: film.starships,
    vehicles: film.vehicles,
  };
};
export const _transformPlanet = (planet) => {
  return {
    id: _extractId(planet),
    name: planet.name,
    diameter: planet.diameter,
    rotationPeriod: planet.rotation_period,
    orbitalPeriod: planet.orbital_period,
    gravity: planet.gravity,
    population: planet.population,
    climate: planet.climate,
    terrain: planet.terrain,
    surfaceWater: planet.surface_water,
  };
};

export const _transformStarship = (starship) => {
  return {
    id: _extractId(starship),
    name: starship.name,
    model: starship.model,
    class: starship.starship_class,
    manufacturer: starship.manufacturer,
    length: starship.length,
    costInCredits: starship.cost_in_credits,
    crew: starship.crew,
    passengers: starship.passengers,
    speed: starship.max_atmosphering_speed,
    cargoCapacity: starship.cargo_capacity,
    consumables: starship.consumables,
    hyperdriveRating: starship.hyperdrive_rating,
    mglt: starship.MGLT,
  };
};

export const _transformPerson = (person) => {
  return {
    id: _extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
    hairColor: person.hair_olor,
    skinColor: person.skin_color,
    height: person.height,
    homeworld: person.homeworld,
    mass: person.mass,
  };
};

export const _transformVehicles = (vehicle) => {
  return {
    id: _extractId(vehicle),
    name: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    manufacturer: vehicle.manufacturer,
    length: vehicle.length,
    costInCredits: vehicle.cost_in_credits,
    crew: vehicle.crew,
    passengers: vehicle.passengers,
    speed: vehicle.max_atmosphering_speed,
    cargoCapacity: vehicle.cargo_capacity,
    consumables: vehicle.consumables,
  };
};

export default swapi;
