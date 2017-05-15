import * as React from 'react';
import './App.css';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Greeter from './greeter';
import NavDrawer from './navdrawer';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component<{}, null> {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavDrawer>
            <h1><Greeter defaultName="Daniel" /></h1>
          </NavDrawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
