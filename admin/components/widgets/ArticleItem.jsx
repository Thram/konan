/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { RECORD_TYPES } from '../../constatns';
import { Group } from '../pure';


class ArticleItem extends Component {

  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    author: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    text: '',
    author: '',
  };

  static signature = {
    title: RECORD_TYPES.text,
    text: RECORD_TYPES.text,
    author: RECORD_TYPES.text,
  };

  render = () => (
    <Group container>
      <h1>{this.props.title}</h1>
      <h5>{this.props.author}</h5>
      <p>{this.props.text}</p>
    </Group>
  );

}

export default ArticleItem;
