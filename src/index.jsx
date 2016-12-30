import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Core from './containers/Core/';

import Read from './containers/Read';
import Write from './containers/Write';

injectTapEventPlugin();

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initFirebase();
  }
}

function initFirebase() {
  var config = {
    apiKey: "AIzaSyDs31bRkkTnxw_hw-roExumRnEBbS8qAXI",
    authDomain: "including-2df77.firebaseapp.com",
    databaseURL: "https://including-2df77.firebaseio.com",
    storageBucket: "including-2df77.appspot.com",
    messagingSenderId: "242782506038"
  };
  firebase.initializeApp(config);
}

function init() {
  ReactDOM.render(
    <Provider>
      <Router history={hashHistory}>
        <Route path="/" component={Core}>
          <Route path="read" component={Read} />
          <Route path="write" component={Write} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
};

init();
