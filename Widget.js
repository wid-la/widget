import React, { Component, PropTypes } from 'react';
import { Tile } from 'decorators';
import defaultProps from './defaultProps';
import styles from './styles';

@Tile
export default class Widget extends Component {
  static propTypes = {
    /* Card Common props */
    data: PropTypes.string,
    fontSize: PropTypes.string,
    color: PropTypes.string,
    prefix: PropTypes.string,
    postfix: PropTypes.string,
    background: PropTypes.string,
  };

  static defaultProps = defaultProps;


  _getWidgetStyle() {
    const { background, color, fontSize } = this.props;

    const divStyle = {
      width: '100%',
      height: '100%',
      background,
      color,
      fontSize,
      textAlign: 'center',
    };

    return divStyle;
  }

  render() {
    const { data, prefix, postfix } = this.props;

    return (
      <div
        style={this._getWidgetStyle()}
        className="layout vertical center-center fullWidth fullHeight"
      >
        <div className="layout horizontal flex-3 center-center fullWidth">
          Hello World !
        </div>
        <div className="layout horizontal flex-1 center-center fullWidth topLine">
          <span style={styles.data}>{prefix} {data} {postfix}</span>
        </div>
      </div>
    );
  }
}
