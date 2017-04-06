/**
 * Created by thram on 21/01/17.
 */
import React, { Component } from 'react';
import { map } from 'lodash';
import Router, { goRoute } from './Router';
import SideBar from './SideBar';
import { Group, Cell } from './pure';
import { Home, Layouts, Pages, Templates, Widgets } from './views';

const getRouteParams = (label, path, component) => ({
  path,
  component,
  action: () => goRoute(path),
  label,
})

const routes = {
  home: getRouteParams('Konan', '/', Home),
  pages: getRouteParams('Pages', '/pages', Pages),
  templates: getRouteParams('Templates', '/templates', Templates),
  layouts: getRouteParams('Layouts', '/layouts', Layouts),
  widgets: getRouteParams('Widgets', '/widgets', Widgets),
};
const getRef = ref => console.log(ref && ref.element);

class App extends Component {
  render = () => (
    <Group tag="section">
      <Cell ref={getRef} size="2/12" style={{ height: '100%', backgroundColor: '#E47267' }}>
        <SideBar
          menu={routes}
        />
      </Cell>
      <Cell size="10/12" id="cell">
        <Router routes={routes} />
      </Cell>
    </Group>)
}

export default App;
