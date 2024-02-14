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

class Player {
    constructor(turn, score) {
        this.turn = false
        this.score = 0
    }
    checkScore() {
        return this.score
    }
    checkTurn() {
        return this.turn
    }
    setScore() {
        this.score += 1
    }
    setTurn() {
        this.turn = true
    }
}

export { Ship, Player }