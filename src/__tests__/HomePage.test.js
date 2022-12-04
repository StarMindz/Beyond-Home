import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import HomePage from '../components/pages/HomePage';

describe('Homepage', () => {
  test('Show Correct render of Homepage', () => {
    const home = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <HomePage />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(home).toMatchSnapshot();
  });
});
