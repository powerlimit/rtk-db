export interface StarWarsPerson {
	"birth_year": string,
	"eye_color": string,
	"films": string[],
	"gender": string,
	"hair_color": string,
	"height": string,
	"homeworld": string,
	"mass": number,
	"name": string,
	"skin_color": string,
	"created": string,
	"edited": string,
	"species": string[],
	"starships": string[],
	"url": string,
	"vehicles": string[]
}

export interface StarWarsFilm {
	"characters": string[],
	"created": string,
	"director": string,
	"edited": string,
	"episode_id": number,
	"opening_crawl": string,
	"planets": string[],
	"producer": string,
	"release_date": string,
	"species": string[],
	"starships": string[],
	"title": string,
	"url": string,
	"vehicles": string[]
}

export type PeopleAndFilms = {
	people: StarWarsPerson[],
	films: StarWarsFilm[]
}