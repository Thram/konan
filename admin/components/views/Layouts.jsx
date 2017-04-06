/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { Group, Cell } from '../pure';

class Layouts extends Component {
  componentDidMount() {
    console.log('Layouts mounted!');
  }

  render = () => (
    <Group>
      <Cell>
        <h1>Layouts</h1>
      </Cell>
    </Group>
  );

}

export default Layouts;
