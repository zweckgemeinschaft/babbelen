/// <reference path="./interfaces.d.ts" />
import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Greeter extends React.Component<IGreeterProps, IGreeterState> {
  constructor(props: IGreeterProps) {
      super(props);
      this.state = {
        name: this.props.defaultName,
        tentativeName: ''
      };
  }

  handleOnClick(event: object): void {
      this.setState({ name: this.state.tentativeName });
  }

  handleNameChange(newName: string): void {
      this.setState({ tentativeName:  newName});
  }
  
  render() {
    return (
      <div>
        <p>Hello {this.state.name}!</p>

        <p>
          <TextField
               hintText="Name"
               errorText="This field is required"
               onChange={(e, newValue) => this.handleNameChange(newValue)}
          />
        </p>

        <p>
          <RaisedButton
              onClick={e => this.handleOnClick(e)}
              label="Button!"
          />
        </p>
      </div>
    );
  }
}
