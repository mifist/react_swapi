class SwapiService {

    // base variable
    _apiBase = 'https://swapi.co/api';

    // core
    gerResorse = async (url, headers) => {
        const res = await fetch(`${this._apiBase}${url}`, headers)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        const body = await res.json()
        return body;
    } 

    // People
    async getAllPeople() {
        const res = await this.gerResorse(`/people/`)
        return res.results
    }
    getPerson(id) {
        return this.gerResorse(`people/${id}/`)
    }

    // Planets
    async getAllPlanets() {
        const res = await this.gerResorse(`/planets/`)
        return res.results
    }
    getPlanet(id) {
        this.gerResorse(`/planets/${id}/`)
    }

    // Starships
    async getAllStarships() {
        const res = await this.gerResorse(`/starships/`)
        return res.results
    }
    getStarships(id) {
        this.gerResorse(`/starships/${id}/`)
    }

}

//const swapi = new SwapiService();
//swapi.getAllPeople()
