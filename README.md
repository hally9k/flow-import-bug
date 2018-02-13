## Import bug in Flow

This repo is to demonstrate how importing types into a file that is declaring types as a flow lib breaks type-checking for those imported types and fails silently.

We have 2 files containing types:  
`base.js.flow` contains a single type, `Person`. The `Person` type is exported.  
`football.js.flow` imports `Person` and contains a single type, `Team` which has an array of type `Person`. The `Team` type is declared globally. 

The `.flowconfig` file simply references `football.js.flow` under `[lib]`.

See `index.js` that instiantiates a `Team` and some players. Note that the forst player is of type `Person` and doesn't have the required name property. Flow correctly flags that up as failing the type check. 

Run `flow` to see the correct errors informing you that a `Person` indeed has to have a name property.

Now comment out the import of the Person type.

We would expect that the type `Person` could not be resolved as we haven't imported it.

Run `flow` and see `No errors.`

If the import of Person into the `football.js.flow` file made it global then this should still correctly fail the type check.

Instead it silently fails to warn us that the type isn't imported and incorrectly passes the type check for the player who has no name.
