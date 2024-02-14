import { Ship } from './objects.js'

const frigate = new Ship(3, 0)

test('is sunk after three hits', () => {
    frigate.hit()
    frigate.hit()
    frigate.hit()
    expect(frigate.isSunk()).toBe(true)
})

test('is not sunk after two hits', () => {
    frigate.hit()
    frigate.hit()
    expect(frigate.isSunk()).toBe(false)
})