import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers/app";
import adventureReducer from "./reducers/adventure";

const rootReducer = combineReducers({
    adventure: adventureReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;