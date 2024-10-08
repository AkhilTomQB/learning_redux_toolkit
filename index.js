const store = require("./app/store")
const cakeActions= require("./features/cake/cakeSlice").cakeActions
const iceCreamActions= require("./features/iceCream/iceCreamSlice").iceCreamActions
console.log("initial State",store.getState())

const unsubscribe= store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
store.dispatch(iceCreamActions.restocked(3))
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())

unsubscribe()


