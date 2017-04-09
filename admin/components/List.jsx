/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { Group } from './pure';
import Record from './Record';

class List extends Component {

  static propTypes = {
    records: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    records: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      records: props.records,
    };
  }

  render = () => (
    <Group container>
      {this.state.records.map(record => <Record {...record} />)}
    </Group>
  );
}


export default List;
