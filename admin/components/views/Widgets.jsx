/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { Group, Cell } from '../pure';

class Widgets extends Component {
  componentDidMount() {
    console.log('Widgets mounted!');
  }

  render = () => (
    <Group>
      <Cell>
        <h1>Widgets</h1>
      </Cell>
    </Group>
  );

}

export default Widgets;
