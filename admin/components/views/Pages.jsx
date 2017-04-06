/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { Group, Cell } from '../pure';

class Pages extends Component {
  componentDidMount() {
    console.log('Pages mounted!');
  }

  render = () => (
    <Group>
      <Cell>
        <h1>Pages</h1>
      </Cell>
    </Group>
  );

}

export default Pages;
