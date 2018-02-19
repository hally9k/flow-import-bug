// @flow
//
// Run `flow` and see the type checking fail correctly because of the missing name property.
// To reproduce the bug: Comment out the import statement below.
// The incorrect Person type below will pass type checking incorrectly.
import { type Person } from './base.js.flow'

const alexis: Person = {
    randomKeyInsteadOfName: 'Alexis Sanchez'
}

const ManchesterUnited: Team = {
    players: [alexis]
}
