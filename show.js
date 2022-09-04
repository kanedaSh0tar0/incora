class Show {
    constructor({ name, genre, releaseDate, duration, type }) {
        this.name = name
        this.genre = genre
        this.releaseDate = releaseDate
        this.duration = duration
        this.type = type
    }

    getDuration() {
        return this.duration
    }

    getShowType() {
        if (this.type === 'Movie') return 'This is movie'
        if (this.type === 'Series') return 'This is series'
    }
}

export class Movie extends Show {
    constructor(props) {
        super(props)
    }
}

export class Series extends Show {
    constructor(props) {
        super(props)
        this.episodes = props.episodes
    }
}

export class Episode extends Series {
    constructor(props) {
        super(props)
        this.name = props.name
    }
}