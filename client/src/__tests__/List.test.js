import React from 'react';
//import { cleanup, fireEvent, render} from '@testing-library/react';
import List from '../components/List.jsx';
import renderer from 'react-test-renderer';

//afterEach(cleanup);

//test list of todos
const testToDos = [
  'Do the laundry',
  'Make lunch',
  'Water the garden'
]


//snapshot testing
it('renders correctly', () => {
  const list = renderer
    .create(<List isLoaded={true} items={testToDos}></List>)
    .toJSON();
  expect(list).toMatchSnapshot();
})