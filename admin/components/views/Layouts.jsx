/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import Landing from '../templates/Landing';

const ARTICLES = [
  {
    title: 'Article',
    text: 'asdada as ad a sda d ad a dadada ',
  },
  {
    title: 'Article',
    text: 'asdada as ad a sda d ad a dadada ',
  },
  {
    title: 'Article',
    text: 'asdada as ad a sda d ad a dadada ',
  },
  {
    title: 'Article',
    text: 'asdada as ad a sda d ad a dadada ',
  },
];

class Layouts extends Component {

  getData = () => ({
    hero: {
      src: 'https://i.ytimg.com/vi/TraUBFIuqvk/maxresdefault.jpg',
      title: 'X-Men',
      info: 'Saving the mutant specie',
    },
    recentArticles: ARTICLES,
    relatedArticles: ARTICLES,
  });

  render = () => (
    <Landing data={this.getData()} />
  );

}

export default Layouts;
