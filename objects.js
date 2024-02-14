class Ship {
    constructor(length, hits) {
        this.length = length
        this.hits = hits
        this.sunk = false
    }
    hit() {
        this.hits += 1
    }
    isSunk() {
        if(this.hits === this.length) {
            this.sunk = true
        } else {
            this.sunk = false
        }
        return this.sunk
    }
}

export { Ship }