import { render } from '@testing-library/react';

import { InputLabel } from './input-label';

describe('Input label', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<InputLabel name="test" label="test" />);
		expect(baseElement).toBeTruthy();
	});
});
