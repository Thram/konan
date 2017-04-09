/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { Input, Group } from './pure';

class Media extends Component {

  static propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    url: '',
    title: '',
    description: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      title: props.title,
      description: props.description,
    };
  }

  render = () => (
    <Group container>
      <Input
        defaultValue={this.props.url} value={this.state.url}
        onBlur={ev => this.setState({ url: ev.target.value })}
      />
      <Input
        defaultValue={this.props.title} value={this.state.title}
        onBlur={ev => this.setState({ title: ev.target.value })}
      />
      <Input
        defaultValue={this.props.description} value={this.state.description}
        onBlur={ev => this.setState({ description: ev.target.value })}
      />
    </Group>
  );
}


export default Media;
