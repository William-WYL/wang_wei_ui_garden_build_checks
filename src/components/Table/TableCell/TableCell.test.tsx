import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell Component', () => {
  it('renders children and is visible', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    expect(screen.getByText('Test cell')).toBeVisible();
  });

  it('shows disabled styles when disabled', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Disabled cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    const cell = screen.getByText('Disabled cell');
    expect(cell).toHaveStyle('color: #999');
    expect(cell).toHaveStyle('background-color: #f5f5f5');
  });
});
