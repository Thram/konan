/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { getSignature } from '../../utils';
import { HeroImage, ArticleList } from '../widgets';
import { Group, Cell } from '../pure';

const HeroInfoContainer = {
  position: 'absolute',
  top: '2rem',
  right: '2rem',
  textAlign: 'right',
  color: 'white',
};


class Landing extends Component {


  static propTypes = {
    data: PropTypes.shape({
      hero: PropTypes.shape({}),
      recentArticles: PropTypes.arrayOf(PropTypes.shape({})),
      relatedArticles: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  };

  static defaultProps = {
    data: {
      hero: { image: '', alt: '' },
      recentArticles: [],
      relatedArticles: [],
    },
  };

  static getSignature = () => getSignature(Landing)({
    hero: HeroImage.getSignature(),
    recentArticles: ArticleList.getSignature(),
    relatedArticles: ArticleList.getSignature(),
  });

  getHeroImage = hero => (
    <HeroImage image={hero.src}>
      <div style={HeroInfoContainer}>
        <h1>{hero.title}</h1>
        <h3>{hero.info}</h3>
      </div>
    </HeroImage>
  );


  render = () => {
    const { hero, recentArticles, relatedArticles } = this.props.data;
    return (
      <Group container>
        {this.getHeroImage(hero)}
        <Group>
          <Cell mediaQueries={{ small: '1/2', medium: '3/4' }}>
            <Group container>
              <ArticleList articles={recentArticles} />
            </Group>
            <Group container>
              <ArticleList articles={relatedArticles} />
            </Group>
          </Cell>
          <Cell mediaQueries={{ small: '1/2', medium: '1/4' }}>
            <ArticleList articles={relatedArticles} />
          </Cell>
        </Group>
      </Group>
    );
  }
}

export default Landing;
