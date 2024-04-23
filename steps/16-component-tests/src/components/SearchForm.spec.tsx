import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, userEvent } from '../utils/components.test-utils';
import { SearchForm } from './SearchForm';

function SearchFormWrapper() {
  const [filter, setFilter] = useState<string>('NOTHING');
  return (
    <section>
      <SearchForm onChange={(value) => setFilter(value)} />
      <p>{filter}</p>
    </section>
  );
}

describe('SearchForm', () => {
  it('should render correctly', async () => {
    // ARRANGE
    render(<SearchFormWrapper />);

    // ACT

    // ASSERT
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.getByLabelText('Search')).toBeVisible();
    await expect(screen.findByText('NOTHING')).resolves.toBeVisible();
  });

  it.todo('text typed in the search input should be emitted');
});
