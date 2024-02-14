import { Ship, Player } from './objects.js'

const frigate = new Ship(3, 0)
const plr = new Player()

test.skip('is sunk after three hits', () => {
    frigate.hit()
    frigate.hit()
    frigate.hit()
    expect(frigate.isSunk()).toBe(true)
})

test.skip('is not sunk after two hits', () => {
    frigate.hit()
    frigate.hit()
    expect(frigate.isSunk()).toBe(false)
})

test('player score is initialized to 0', () => {
    expect(plr.checkScore()).toBe(0)
})

test('player score is updated', () => {
    plr.setScore()
    plr.setScore()
    expect(plr.checkScore()).toBe(2)
})

test('player turn is initialized to false', () => {
    expect(plr.checkTurn()).toBe(false)
})

test('player is given turn', () => {
    plr.setTurn()
    expect(plr.checkTurn()).toBe(true)
})