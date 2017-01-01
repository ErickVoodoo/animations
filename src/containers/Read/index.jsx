// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';

class Read extends Component {
  render(): React$Element<*> {
    let x = [];
    for(let i = 0; i < 100; i++) {
      x.push(i);
    }

    return (
      <div>
        Read
        <Link to="read/13"><button>Show item 13</button></Link>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {x.map((i, index) =>
            <p key={index}>{i}</p>
          )}
        </div>
      </div>
    );
  }
};

export default Read;
