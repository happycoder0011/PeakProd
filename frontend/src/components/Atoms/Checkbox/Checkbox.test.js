import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Checkbox from './Checkbox';


describe('Atom : Checkbox Component', () => {
  it('Should not be striked off by default', () => {
    render(<Checkbox label="Test Label"/>)
    expect(false).toBe(false);

    const checkbox = screen.getByTestId("checkbox");
    const checkboxLabel = screen.getByTestId("checkbox-label");

    expect(checkbox).not.toBeChecked();
    expect(checkboxLabel).not.toHaveStyle('text-decoration: line-through');
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

