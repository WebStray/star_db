
class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

    // обработка ошибок
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeoples() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPeople(id) {
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}`)
    }
}

const swapi = new SwapiService();
swapi.getAllStarships().then((planet) => {
    planet.forEach((p) => {
        console.log(p.name);
    });
});


// swapi.getStarship(3).then((planet) => {
//     console.log(planet.name);
// });