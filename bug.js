// @flow
// import { type Person } from './base.js.flow'

// This passes type checking (incorrectly and silently) when the type is not explicitly exported above.
const sane: Person = {
    randomKeyInsteadOfName: 'Leroy Sane'
}

const ManchesterCity: Team = {
    players: [sane]
}
