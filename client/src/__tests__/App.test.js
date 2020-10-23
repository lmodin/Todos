import React from 'react';
//import { cleanup, fireEvent, render} from '@testing-library/react';
import App from '../components/App.jsx';
import renderer from 'react-test-renderer';

//afterEach(cleanup);



//snapshot testing
it('renders correctly', () => {
  const component = renderer
    .create(<App ></App>)
    .toJSON();
  expect(component).toMatchSnapshot();
})