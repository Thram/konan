/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { Group, Cell } from '../pure';

class Home extends Component {
  componentDidMount() {
    console.log('Home mounted!');
  }

  render = () => (
    <Group>
      <Cell>
        <h1>Home</h1>
      </Cell>
    </Group>
  );

}

export default Home;
