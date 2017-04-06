/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { Group, Cell, Image } from '../pure';

class Hero extends Component {
  componentDidMount() {
    console.log('Layouts mounted!');
  }

  render = () => (
    <Group>
      <Cell>
        <Image src="https://i.ytimg.com/vi/TraUBFIuqvk/maxresdefault.jpg" />
      </Cell>
    </Group>
  );

}

export default Hero;
