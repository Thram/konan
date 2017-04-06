/**
 * Created by thram on 6/04/17.
 */
import React, { Component, PropTypes } from 'react';
import { Group as pGroup } from '../../styles/Pure';
import Element from './Element';

class Group extends Component {
  static propTypes = { className: PropTypes.string };
  static defaultProps = { className: '' };

  setRef = (ref) => {
    this.element = ref.element;
  };

  render = () => <Element
    ref={this.setRef}
    {...this.props}
    className={`${pGroup} ${this.props.className}`}
  />;
}


export default Group;