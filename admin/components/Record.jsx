/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { map, reduce, set } from 'lodash';
import { RECORD_TYPES } from '../constatns';
import widgets from './widgets';
import RichText from './widgets/RichText';
import Media from './Media';
import List from './List';
import {
  Input,
  Group,
  Cell,
} from './pure';

const WIDGET_TYPES = reduce(widgets, (res, Widget, name) => set(res, name, Widget.signature), {});

class Record extends Component {

  static propTypes = {
    key: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({})),
      PropTypes.shape({}),
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    key: 'key',
    type: 'text',
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      key: props.key,
      type: props.type,
      value: props.value,
    };
  }

  renderTypes = {
    text: () => <Input value={this.state.value} />,
    richText: () => <RichText raw={this.state.value} />,
    media: () => <Media {...this.state.value} />,
    record: () => <Record {...this.state.value} />,
    list: () => <List records={this.state.value} />,
  };

  renderValue = type => map(WIDGET_TYPES[type], (recordType, key) => (<Group>
    <Cell size="1/4">
      {key}
    </Cell>
    <Cell size="3/4">
      {this.renderTypes[recordType] ? this.renderTypes[recordType]() : <div />}
    </Cell>
  </Group>));

  render = () => (
    <Group>
      <Cell size="1/4">
        <Input
          defaultValue={this.props.key} value={this.state.key}
          onChange={ev => this.setState({ key: ev.target.value })}
        />
      </Cell>
      <Cell size="1/4">
        <select
          defaultValue={this.props.type} value={this.state.type}
          onChange={ev => this.setState({ type: ev.target.value, value: undefined })}
        >
          {map(WIDGET_TYPES, (signature, name) =>
            <option
              key={`record_type_${name}`}
              value={name}
            >{name}</option>)}
        </select>
      </Cell>
      <Cell size="2/4">
        {this.renderValue(this.state.type)}
      </Cell>
    </Group>
  );
}


export default Record;
