import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import APOD from '../components/pages/Apod';

describe('APOD page', () => {
  test('Show Correct render of APOD', () => {
    const apod = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <APOD />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(apod).toMatchSnapshot();
  });
});
