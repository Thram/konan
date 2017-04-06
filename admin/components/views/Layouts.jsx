/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { Group, Cell } from '../pure';
import Hero from '../layouts/Hero';

class Layouts extends Component {
  componentDidMount() {
    console.log('Layouts mounted!');
  }

  render = () => (
    <Hero />
  );

}

export default Layouts;
