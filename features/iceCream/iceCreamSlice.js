const createSlice= require("@reduxjs/toolkit").createSlice
const initialState= {
    numOfIceCreams:20
}

const iceCreamSlice= createSlice({
    name:"iceCream",
    initialState:initialState,
    reducers:{
        ordered:(state,action={})=>{
            state.numOfIceCreams--
        },
        restocked:(state,action)=>{
            state.numOfIceCreams+action.payload
        }
    },
    extraReducers:builder => {
        builder.addCase("cake/ordered", (state, action) => {
            state.numOfIceCreams--
        })
      }
})

module.exports=iceCreamSlice.reducer
module.exports.iceCreamActions=iceCreamSlice.actions