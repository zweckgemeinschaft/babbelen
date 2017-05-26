import * as React from 'react';
import classNames from 'classnames';
import Icon from './icon';


export default class Button extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string,
    iconPosition: React.PropTypes.string,
    iconSet: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  static defaultProps = {
    icon: null,
    iconPosition: 'left',
    iconSet: 'material-icons',
    onClick: undefined
  }

  render() {
    const {
      icon, iconPosition, iconSet, onClick, children
    } = this.props;

    const icon_tag = (
      <Icon iconSet={iconSet} iconPosition={iconPosition}>{icon}</Icon>
    );

    return (
      <a className="waves-effect waves-light btn" onClick={onClick}>
        {icon ? icon_tag : null}
        {children}
      </a>
    );
  }
}

module.exports = Button;
