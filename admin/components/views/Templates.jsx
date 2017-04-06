/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { Group, Cell } from '../pure';

class Templates extends Component {
  componentDidMount() {
    console.log('Templates mounted!');
  }

  render = () => (
    <Group>
      <Cell>
        <h1>Templates</h1>
      </Cell>
    </Group>
  );

}

export default Templates;
