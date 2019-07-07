import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from "redux-devtools-extension";

import reducers from './reducers';

const logger = createLogger({});
const middleware = applyMiddleware(logger,promiseMiddleware);
const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
