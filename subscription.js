class Subscription {
    constructor(owner, streamingService) {
        this.owner = owner
        this.streamingService = streamingService
    }

    watch(showName) {
        if (Object.keys(this.streamingService.viewsByShowNames).includes(showName)) {
            this.streamingService.viewsByShowNames[showName]++
        }
        else {
            return `Show ${showName} does not exist`
        }
    }

    getRecommendationTrending() {
        const thisYear = new Date().getFullYear()
        const showsArrayLength = this.streamingService.getMostViewedShowsOfYear(thisYear).length

        return this.streamingService.getMostViewedShowsOfYear(thisYear)[Math.floor(Math.random() * showsArrayLength)]
    }

    getRecommendationByGenre(genre) {
        const showsArrayLength = this.streamingService.getMostViewedShowsOfGenre(genre).length

        return this.streamingService.getMostViewedShowsOfGenre(genre)[Math.floor(Math.random() * showsArrayLength)]
    }
}

export default Subscription