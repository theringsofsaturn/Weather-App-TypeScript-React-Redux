import thunk from 'redux-thunk'; // thunk middleware allows us to write action creators that return a function instead of an action
import {composeWithDevTools} from 'redux-devtools-extension'; // allows us to use redux dev tools
import {createStore, applyMiddleware, combineReducers} from 'redux'; // combine reducers, allows us to combine multiple reducers into one.
import { weatherReducer } from '../reducers/weatherReducer'; 
import { alertReducer } from '../reducers/alertReducer';

// combine reducers
const rootReducer = combineReducers({ //
    weather: weatherReducer,
    alert: alertReducer
});

// create store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export RootState, which has the root state of weather and alert
export type RootState = ReturnType<typeof rootReducer>;
export default store;
