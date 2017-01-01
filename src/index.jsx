import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Match, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Core from './containers/Core/';

import Read from './containers/Read/index.jsx';
import ReadItem from './containers/Read/Item/index.jsx';
import Write from './containers/Write/index.jsx';

injectTapEventPlugin();

require('style!css!normalize.css/normalize.css');

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

const routes = [
  {
    pattern: '/',
    component: Core,
    routes: [
      {
        pattern: '/read',
        component: Read,
      },
      {
        pattern: '/write',
        component: Write,
      }
    ],
  }
];

function init() {
  ReactDOM.render(
    <Provider>
      <HashRouter>
        <Match pattern="/" render={(matchProps) => (
          <Core>
            <Match exactly pattern="read" component={Read} />
            <Match pattern="read/:id" component={ReadItem} />
            <Match pattern="write" component={Write} />
          </Core>
        )} />
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  );
};

init();
