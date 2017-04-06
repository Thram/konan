/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { assign, map, omit } from 'lodash';
import { Unit } from '../../styles/Pure';
import Element from './Element';

class Column extends Component {
  static propTypes = {
    mediaQueries: PropTypes.shape({}),
    className: PropTypes.string,
    size: PropTypes.string,
  };

  static defaultProps = {
    mediaQueries: {},
    className: '',
    size: '1',
  };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => {
    const className = map({ base: this.props.size, ...this.props.mediaQueries },
      (fraction, size) => Unit({
        fraction,
        size,
      })).join(' ');
    return (<Element
      ref={this.setRef}
      {...omit(this.props, ['mediaQueries', 'className', 'size'])}
      className={`${className} ${this.props.className}`}
    />);
  }
}


export default Column;
