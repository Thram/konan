/**
 * Created by thram on 21/01/17.
 */
import React from 'react';
import {
  Group,
  Cell,
  Form,
  FormMessage,
  FormMessageInline,
  Button,
  Input,
  Checkbox,
  Radio,
  ControlGroup,
  Controls,
  HelpInline,
  Image,
  Menu,
  MenuChildren,
  MenuHeading,
  MenuList,
  MenuItem,
  MenuLink,
  MenuSeparator,
  Table,
  helpers,
} from './pure';
const { Unit, TableRowOdd } = helpers;
const getRef = ref => console.log(ref.element);
const KitchenSink = () => (
  <Group>
    <Cell ref={getRef} size="1/2">
      <h1 className={`${Unit({ fraction: '1/2' })}`}>Hola</h1>
      <Menu>
        <MenuHeading>heading</MenuHeading>
        <MenuList>
          <MenuItem>
            <MenuLink href="#">Menu 1</MenuLink>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuLink href="#">Menu 2</MenuLink>
          </MenuItem>
          <MenuItem hasChildren active>
            <MenuLink href="#">Menu 3</MenuLink>
            <MenuChildren>
              <MenuItem>
                <MenuLink href="#">SubMenu 1</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#">SubMenu 2</MenuLink>
              </MenuItem>
            </MenuChildren>
          </MenuItem>

        </MenuList>
      </Menu>
      <Form>
        <Input rounded size="1/2" />
        <FormMessage>This is a required field.</FormMessage>
        <Checkbox > TEst</Checkbox>
        <Radio name="optionsRadios">TEst</Radio>
        <Radio name="optionsRadios">TEst</Radio>
      </Form>
      <Form aligned>
        <ControlGroup>
          <label htmlFor="name">Username</label>
          <input id="name" type="text" placeholder="Username" />
          <FormMessageInline>This is a required field.</FormMessageInline>
        </ControlGroup>
        <ControlGroup>
          <label htmlFor="name">Username</label>
          <input id="name" type="text" placeholder="Username" />
          <HelpInline>This is a required field.</HelpInline>
        </ControlGroup>
        <Controls>
          <Button type="primary">Test</Button>
          <Checkbox > TEst</Checkbox>
        </Controls>
        <Input rounded size="1/2" />
        <Radio name="optionsRadios">TEst</Radio>
        <Radio name="optionsRadios">TEst</Radio>
      </Form>
      <Button>Test</Button>
      <Image src="https://i.ytimg.com/vi/TraUBFIuqvk/maxresdefault.jpg" />
    </Cell>
    <Cell size="1/2">
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>1</td>
          <td>Honda</td>
          <td>Accord</td>
          <td>2009</td>
        </tr>

        <tr className={TableRowOdd}>
          <td>2</td>
          <td>Toyota</td>
          <td>Camry</td>
          <td>2012</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Hyundai</td>
          <td>Elantra</td>
          <td>2010</td>
        </tr>
        </tbody>
      </Table>
    </Cell>
  </Group>
);

export default KitchenSink;
