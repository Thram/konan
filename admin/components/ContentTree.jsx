/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { map } from 'lodash';
import { Group, Cell } from './pure';
import Record from './Record';

class ContentTree extends Component {

  static propTypes = {
    content: PropTypes.shape(Record.propTypes),
  };

  static defaultProps = {
    content: {},
  };

  render = () => (
    <Group container>
      {map(this.props.content, (root, name) => <Group>
        <Cell size="1/4">
          {name}:
        </Cell>
        <Cell size="3/4">
          <Record {...root} />
        </Cell>
      </Group>)}

    </Group>
  );
}


export default ContentTree;
