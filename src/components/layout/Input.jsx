/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { omit } from 'lodash';
import { Input as pInput } from '../../styles/Pure';
import Element from './Element';

class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    rounded: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    size: '1',
    rounded: false,
  };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => {
    const className = pInput({ fraction: this.props.size, rounded: this.props.rounded });
    return (<Element
      tag="input"
      ref={this.setRef}
      {...omit(this.props, ['className', 'size', 'rounded'])}
      className={`${className} ${this.props.className}`}
    />);
  }
}


export default Input;
