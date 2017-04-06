/**
 * Created by thram on 21/01/17.
 */
import React, { Component, PropTypes } from 'react';
import { map } from 'lodash';
import {
  Menu,
  MenuHeading,
  MenuList,
  MenuItem,
  MenuLink,
} from './pure';


class SideBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    menu: PropTypes.shape({}),
  };
  static defaultProps = {
    title: 'Konan',
    menu: {},
  };
  render = () => (
    <Menu>
      <MenuHeading style={{ color: '#FDEBA9' }}>{this.props.title}</MenuHeading>
      <MenuList>
        {map(this.props.menu, (item, key) => <MenuItem key={key}>
          <MenuLink
            {...{
              href: item.url,
              action: item.action,
              style: { color: '#FDEBA9' },
              onClick: item.action,
            }}
          >{item.label}</MenuLink>
        </MenuItem>)}
      </MenuList>
    </Menu>
  );
}


export default SideBar;
