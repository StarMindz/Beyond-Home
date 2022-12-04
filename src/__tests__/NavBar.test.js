import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('Navbar component', () => {
  test('Show Correct render of Navbar', () => {
    const navbar = render(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });

  test('Check if \'Beyond Home\' is in the rendered document of Navbar', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(screen.getByText('Beyond Home')).toBeInTheDocument();
  });
});
