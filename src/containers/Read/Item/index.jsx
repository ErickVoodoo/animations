// @flow

import React, { Component } from 'react';

class Item extends Component {
  render(): React$Element<*> {
    return (
      <div>
        Read child: { this.props.params.id  }
      </div>
    );
  }
};

export default Item;
