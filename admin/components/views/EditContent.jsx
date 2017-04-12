/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-thrux';
import { select, set } from '../../actions/content';

import { map, assign, snakeCase, reduce, filter } from 'lodash';
import { Group, Cell, Button, Input, Form } from '../pure';
import Record from '../Record';
import { getContent, setContent } from '../../api/data';

class EditContent extends Component {

  static propTypes = {
    selected: PropTypes.shape({
      name: PropTypes.string,
      records: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  };

  static defaultProps = {
    selected: {},
  };

  state = {
    contentName: '',
    mode: 'view',
    selected: { key: '', value: '' },
    new: { fields: [], name: '' },
    content: getContent(),
  };

  selectContent = (name, content) => () => select(name, content);

  addContent = () => this.state.contentName && set(this.state.contentName, []);

  renderSelectedContent = () => (
    <Group container>
      <Group container>
        <Input
          value={this.props.selected.name}
          onChange={ev => select({ name: ev.target.value, value: undefined })}
        />
        <Record />
        {this.props.selected.records.map(record => <Record {...record} />)}
      </Group>
    </Group>
  );

  render = () => (
    <Group>
      <Cell>
        <h1>Content</h1>
        <Group>
          <Cell size="1/2">
            <Input
              value={this.state.contentName}
              onChange={ev => this.setState({ contentName: ev.target.value })}
            />
          </Cell>
          <Cell size="1/2">
            <Button
              onClick={this.addContent}
            >Add content</Button>
          </Cell>
        </Group>

        {map(this.props.content, (content, name) =>
          <Button
            key={`button_${name}`}
            onClick={this.selectContent(name, content)}
          >{name}</Button>)}
        {this.props.selected && this.renderSelectedContent()}
      </Cell>
    </Group>
  )

}

export default connect('content', EditContent, ({ selected }) => ({ selected }));
