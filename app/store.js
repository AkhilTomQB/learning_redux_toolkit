const configStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");
const userReducer = require("../features/users/userSlice");
const store = configStore({
  reducer: { cake: cakeReducer, iceCream: iceCreamReducer,user: userReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
module.exports = store;
