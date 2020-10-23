import React from 'react';
//import { cleanup, fireEvent, render} from '@testing-library/react';
import AddToDo from '../components/AddToDo.jsx';
import renderer from 'react-test-renderer';

//afterEach(cleanup);



//snapshot testing
it('renders correctly', () => {
  const form = renderer
    .create(<AddToDo ></AddToDo>)
    .toJSON();
  expect(form).toMatchSnapshot();
})