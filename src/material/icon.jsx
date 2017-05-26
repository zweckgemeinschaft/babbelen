import * as React from 'react';
import classNames from 'classnames';

export default class Icon extends React.Component {
  static propTypes = {
    iconSet: React.PropTypes.string,
    iconPosition: React.PropTypes.string,
    children: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    iconPosition: 'left',
    iconSet: 'font-awesome'
  }

  render() {
    const { iconSet, iconPosition, children } = this.props;

    if (iconSet === 'font-awesome') {
      return (
        <i className={classNames('fa', 'fa-' + children, iconPosition)}></i>
      );
    } else if (iconSet === 'material-icons') {
      return (
        <i className={classNames('material-icons', iconPosition)}>{children}</i>
      )
    }

    return null;
  }
}
