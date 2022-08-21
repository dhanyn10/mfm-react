/* eslint-disable import/first */
jest.mock('@electron/remote', () => ({ exec: jest.fn() }));
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../renderer/App';

describe('App', () => {
  it('should render', () => {
    render(<App />);
    expect(screen.getByText('MFM')).toHaveTextContent('MFM');
  });
});
