/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { map } from 'lodash';
import templates from '../templates';
import { Group, Cell } from '../pure';

class Pages extends Component {


  render = () => (
    <Group>
      <Cell>
        {map(templates, (component, name) => <div key={name}>
          <h2>{name}</h2>
          <ul>
            {map(component.getSignature(), (value, key) => <li
              key={key}
            >{key}:{JSON.stringify(value)}</li>)}
          </ul>
        </div>)}
      </Cell>
    </Group>
  );

}

export default Pages;
