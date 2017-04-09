/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { uniqueId } from 'lodash';
import ArticleItem from './ArticleItem';
import { Group } from '../pure';

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = { articles: [] };

  static signature = { articles: [ArticleItem.signature] };

  render = () => (
    <Group container>
      {this.props.articles.map(article =>
        <ArticleItem key={uniqueId('article_item_')} {...article} />)}
    </Group>
  );

}

export default ArticleList;
