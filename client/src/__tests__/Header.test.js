import React from 'react';
//import { cleanup, fireEvent, render} from '@testing-library/react';
import Header from '../components/Header.jsx';
import renderer from 'react-test-renderer';


//snapshot testing
it('renders correctly', () => {
  const header = renderer
    .create(<Header></Header>)
    .toJSON();
  expect(header).toMatchSnapshot();
})