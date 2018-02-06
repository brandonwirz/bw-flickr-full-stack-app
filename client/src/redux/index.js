import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import flickr from "./addFlickrImages";

const rootReducer = combineReducers({
      flickr
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
