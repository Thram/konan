/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { omit } from 'lodash';
import { RECORD_TYPES } from '../../constatns';
import { Group, Cell, Image } from '../pure';

class HeroImage extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    image: '',
    alt: '',
    children: undefined,
  };

  static signature = {
    image: RECORD_TYPES.text,
    alt: RECORD_TYPES.text,
  };

  render = () => (
    <Group {...omit(this.props, ['image', 'alt'])}>
      <Cell style={{ position: 'relative' }}>
        <Image src={this.props.image} alt={this.props.alt} />
        {this.props.children}
      </Cell>
    </Group>
  );
}


export default HeroImage;
