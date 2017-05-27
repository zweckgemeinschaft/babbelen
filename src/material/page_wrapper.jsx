import React, { Component } from 'react';
import Icon from './icon';
import Sidebar from './sidebar';

export default class PageWrapper extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="top-nav">
            <div className="nav-wrapper">
              <a className="page-title">Page-Title</a>
            </div>
          </nav>

          <div className="container">
            <a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only">
              <Icon iconSet="material-icons">menu</Icon>
            </a>
          </div>

          <Sidebar />
        </header>

        <main>
          <div className="container">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

