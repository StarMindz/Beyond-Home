import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import NasaPopUp from '../components/nasaPopUp';

describe('Homepage', () => {
  test('Show Correct render of NasaPopUp', () => {
    const popUp = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <NasaPopUp />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(popUp).toMatchSnapshot();
  });
});
