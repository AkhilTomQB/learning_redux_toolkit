const configStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const store = configStore({ reducer: { cake: cakeReducer } });
module.exports=store