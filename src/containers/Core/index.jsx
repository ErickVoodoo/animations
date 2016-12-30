// @flow

import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Read from '../Read/';

class Core extends Component {
  render(): React$Element<*> {
    return (
      <div>
        <div>
          Header
          <button onClick={() => hashHistory.push('/read')}>Read</button>
          <button onClick={() => hashHistory.push('/write')}>Write</button>
        </div>
          {this.props.children || <Read />}
        <div>
          Footer
        </div>
      </div>
    );
  }
};

export default Core;
