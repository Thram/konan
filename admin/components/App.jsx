/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import Router, { goRoute } from './Router';
import SideBar from './SideBar';
import { Group, Cell } from './pure';
import { Home, Layouts, Pages, Templates, Widgets, Content, Media } from './views';

const getRouteParams = (label, path, component) => ({
  path,
  component,
  action: () => goRoute(path),
  label,
});

const routes = {
  home: getRouteParams('Konan', '/', Home),
  content: getRouteParams('Content', '/content', Content),
  media: getRouteParams('Media', '/media', Media),
  pages: getRouteParams('Pages', '/pages', Pages),
  templates: getRouteParams('Templates', '/templates', Templates),
  layouts: getRouteParams('Layouts', '/layouts', Layouts),
  widgets: getRouteParams('Widgets', '/widgets', Widgets),
};
const getRef = ref => console.log(ref && ref.element);

class App extends Component {
  render = () => (
    <Group tag="section" fullHeight>
      <Cell ref={getRef} size="1/12" style={{ backgroundColor: '#E47267' }}>
        <SideBar menu={routes} />
      </Cell>
      <Cell
        size="11/12"
        style={{ overflow: 'auto', position: 'relative', backgroundColor: '#EEE' }}
      >
        <Router routes={routes} />
      </Cell>
    </Group>)
}

export default App;
