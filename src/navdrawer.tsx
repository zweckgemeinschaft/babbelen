/// <reference path="./interfaces.d.ts" />
import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import * as classNames from 'classnames';

export default class NavDrawer extends React.Component<INavDrawerProps, INavDrawerState> {
  constructor(props: INavDrawerProps) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
      this.setState({open: true});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            className={classNames('app-bar', {'expanded': this.state.open})}
            onLeftIconButtonTouchTap={this.handleToggle}
            title="Babbelen Chat"
          />
          <Drawer
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem>Chats</MenuItem>
            <Divider />
            <MenuItem>Web-Engineering</MenuItem>
            <MenuItem>Linear Algebra</MenuItem>
          </Drawer>
          <div className={classNames('app-content', {'expanded': this.state.open})}>{ this.props.children }</div>
        </div>
      </MuiThemeProvider>
    );
  }
}
