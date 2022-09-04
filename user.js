import Subscription from "./subscription.js"

function* idGenerator() {
    let id = 0

    while (true) {
        id++
        yield id
    }
}

const id = idGenerator()

class User {
    constructor() {
        this.userId = id.next().value
        this.subscriptions = []
    }

    subscribe(streamingService) {
        if (this.subscriptions.includes(streamingService.name)) {
            console.log('The subscription has already been issued');
            return 'The subscription has already been issued'
        }
        else {
            this.subscriptions.push(streamingService.name)
            return new Subscription(this.userId, streamingService)
        }
    }
}

export default User