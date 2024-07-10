const configStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");
const store = configStore({
  reducer: { cake: cakeReducer, iceCream: iceCreamReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
module.exports = store;
