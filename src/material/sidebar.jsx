import * as React from 'react';

class SidebarHeader extends React.Component {
  render() {
    return (
      <li>
        <div className="userView">
          <a href="#">
            <img src="https://static.pexels.com/photos/27403/pexels-photo-27403.jpg" width="100%"></img>
          </a>
          <a href="#"><span className="black-text name">John Doe</span></a>
          <a href="#"><span className="black-text email">john.doe@babbelen.com</span></a>
        </div>
      </li>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <div>
        <li><a className="waves-effect">Hello World</a></li>
      </div>
    );
  }
}

export default class Sidebar extends React.Component {
  render() {
    return (
      <ul id="nav-mobile" className="side-nav fixed" style={{overflow: "auto", transform: "translateX(0%)"}}>
        <SidebarHeader />
        <Nav />
      </ul>
    );
  }
}
