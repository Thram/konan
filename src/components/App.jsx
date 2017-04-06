/**
 * Created by thram on 21/01/17.
 */
import React from 'react';
import Group from './layout/Group';
import Column from './layout/Column';
import Form from './layout/Form';
import Button from './layout/Button';
import Input from './layout/Input';

const getRef = (ref) => console.log(ref.element);
const App = () => (
  <Group>
    <Column ref={getRef} size="1/4">
      <Form>
        <Input rounded size="1/2" />
        Hola
        <Button>Test</Button>
      </Form>
    </Column>
  </Group>
);

export default App;
