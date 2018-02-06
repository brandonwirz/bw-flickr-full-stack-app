import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux";
// import {searchPhotos} from "./redux/addFlickrImages";
import {savePhoto} from "./redux/addFlickrImages";

ReactDOM.render(
        <Provider store={store}>
          <Router>
              <App/>
          </Router>
        </Provider>,
      document.getElementById('root')
);

// store.dispatch(searchPhotos());
store.dispatch(savePhoto);
// store.dispatch(deletePhoto);
