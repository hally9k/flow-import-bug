// @flow
import { type Person } from './base.js.flow'

// This fails type checking (correctly) when the type is explicitly exported above
// Comment it out and see everything pass type checking (incorrectly)
const alexis: Person = {
    randomKeyInsteadOfName: 'Alexis Sanchez'
}

const ManchesterUnited: Team = {
    players: [alexis]
}
