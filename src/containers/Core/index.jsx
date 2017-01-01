// @flow

import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import Read from '../Read/index.jsx';

// $FlowIssue
import style from './style.scss';

const cx: () => string = classNames.bind(style);

class Core extends Component {
  onContentScroll = (): void => {
    const content = document.getElementById('content');
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    console.log(content.scrollTop);
    header.style.boxShadow = content.scrollTop > 0 ? 'black 0px 1px 4px' : 'none';
    footer.style.boxShadow = content.scrollTop > 0 ? 'black 0px -1px 4px' : 'none';
  };

  render(): React$Element<*> {
    return (
      <div className={cx('core')}>
        <div id="header" className={cx('header')}>
          <div style={{ display: 'flex' }}>
            <Link to="/read"><button>read</button></Link>
            <Link to="/write"><button>write</button></Link>
          </div>
        </div>
        <div id="content" className={cx('content')} onScroll={this.onContentScroll}>
          {this.props.children || <Read />}
        </div>
        <div id="footer" className={cx('footer')}>
          Footer
        </div>
      </div>
    );
  }
};

export default Core;
