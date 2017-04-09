/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { Group, Cell } from '../pure';

class Media extends Component {
  componentDidMount() {
    console.log('Media mounted!');
  }

  render = () => (
    <Group>
      <Cell>
        <h1>Media</h1>
      </Cell>
    </Group>
  );

}

export default Media;
