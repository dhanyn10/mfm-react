/* eslint-disable import/first */
import { dialog } from '@electron/remote';

jest.mock('@electron/remote', () => ({
  dialog: {
    // replace the showOpenDialog function with a spy which returns a value
    showOpenDialog: jest.fn(() => ({ filePaths: [''] })),
  },
}));
import { render, fireEvent } from '@testing-library/react';
import { InputFolder } from '../renderer/components/InputFolder';
import '@testing-library/jest-dom';

describe('click browse', () => {
  const inputFolder = render(<InputFolder />);
  const button = inputFolder.getByText('Browse', { selector: 'button' });
  test('should pick a folder', () => {
    fireEvent.click(button);
    expect(dialog.showOpenDialog).toHaveBeenCalledTimes(1);
  });
});
