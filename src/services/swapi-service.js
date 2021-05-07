export default class SwapiService {

  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  // People
  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results
      .map(this._transformPerson)
      .slice(0, 5);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

  // Planets
  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results
      .map(this._transformPlanet)
      .slice(0, 5);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  // Starships
  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results
      .map(this._transformStarship)
      .slice(0, 5);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };


  // Vehicles
  getAllVehicles = async () => {
    const res = await this.getResource(`/vehicles/`);
    return res.results
      .map(this._transformVehicles)
      .slice(0, 5);
  };

  getVehicle = async (id) => {
    const vehicle = await this.getResource(`/vehicles/${id}/`);
    return this._transformVehicles(vehicle);
  };

  getVehicleImage = ({id}) => {
    return `${this._imageBase}/vehicles/${id}.jpg`
  };

 

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
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

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
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
      mglt: starship.MGLT
    }
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      hairColor: person.hair_olor,
      skinColor: person.skin_color,
      height: person.height,
      homeworld: person.homeworld,
      mass: person.mass
    }
  }

  _transformVehicles = (vehicle) => {
    return {
      id: this._extractId(vehicle),
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
      consumables: vehicle.consumables
    }
  };



}