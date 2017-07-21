import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import todoApp from "./reducers";

const configureStore = () => {
    const middlewares = [ thunk ];


    if ( process.env.NODE_ENV !== "production" ) {
        middlewares.push( createLogger() );
    }


    /* eslint-disable no-underscore-dangle */
    return createStore(
        todoApp,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware( ...middlewares ),
    );
    /* eslint-enable */
};

export default configureStore;
