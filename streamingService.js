import { readFile } from 'fs/promises'
import { Movie, Series, Episode } from './Show.js'

const streamingData = JSON.parse(await readFile('./streamingData.json'))

class StreamingService {
    constructor({ name, shows, viewsByShowNames }) {
        this.name = name
        this.shows = shows
        this.viewsByShowNames = viewsByShowNames
    }

    addShow(show) {
        for (let i = 0; i < this.shows.length; i++) {
            if (this.shows[i].name === show.name) return 'Show is already on the list'
        }

        const newShow = () => {
            if (show.type === 'Series') {
                return new Series(
                    show,
                    show.episodes.map(episode => {
                        return new Episode(episode)
                    })
                )
            }
            if (show.type === 'Movie') {
                return new Movie(show)
            }
        }

        this.shows.push(newShow())
        this.viewsByShowNames[show.name] = 0
    }

    getMostViewedShowsOfYear(year) {
        const returnedNumber = 10
        const thisYearShow = []

        this.shows.forEach(show => {
            if (show.releaseDate.year === year) {
                thisYearShow.push(show)
            }
        })

        return thisYearShow.sort((a, b) => {
            return this.viewsByShowNames[b.name] - this.viewsByShowNames[a.name]
        }).slice(0, returnedNumber)
    }

    getMostViewedShowsOfGenre(genre) {
        const returnedNumber = 10
        const thisGenreShow = []

        this.shows.forEach(show => {
            if (show.genre.includes(genre)) {
                return thisGenreShow.push(show)
            }
        })

        return thisGenreShow.sort((a, b) => {
            return this.viewsByShowNames[b.name] - this.viewsByShowNames[a.name]
        }).slice(0, returnedNumber)
    }
}


export const streamingServices = Object.entries(streamingData).map(service => {

    const serviceData = {
        name: service[0],
        shows: service[1].shows.map(show => {
            if (show.type === 'Series') {
                return new Series(
                    show,
                    show.episodes.map(episode => {
                        return new Episode(episode)
                    })
                )
            }
            if (show.type === 'Movie') {
                return new Movie(show)
            }
        }),
        viewsByShowNames: (() => {
            let viewsShow = {}
            service[1].shows.forEach(show => {
                viewsShow[show.name] = 0
            })

            return viewsShow
        })()
    }

    const newService = new StreamingService(serviceData)
    return newService
})